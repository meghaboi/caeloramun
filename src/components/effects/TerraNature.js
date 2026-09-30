'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';

/*
 * Particle field function body, following the brief:
 *   i, count, target (Vector3, write-only), color (Color, write-only), time
 * Reused scratch objects only — zero per-frame allocation.
 *
 * Concept: "Terra Nature" — a living globe. ~22,000 particles are laid out on a
 * sphere with a Fibonacci point distribution (even coverage, no pole clustering),
 * then displaced along their own normal by layered 3D simplex noise so the
 * surface reads as breathing terrain — ridgelines, basins, weather fronts —
 * rendered entirely in the site's silver/charcoal palette with the odd bright
 * ridge catching the light, echoing a moonlit world rather than a green one.
 */
function buildParticleUpdate(noise3D) {
  const PHI = Math.PI * (3 - Math.sqrt(5)); // golden angle

  return function updateParticle(i, count, target, color, time, scratch) {
    // --- Fibonacci sphere placement (fixed per-particle basis) ---
    const y = 1 - (i / Math.max(count - 1, 1)) * 2; // -1..1
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = PHI * i;
    const nx = Math.cos(theta) * radiusAtY;
    const ny = y;
    const nz = Math.sin(theta) * radiusAtY;

    // --- organic terrain displacement via layered simplex noise ---
    const t = time * 0.045;
    const freq1 = 1.6;
    const freq2 = 3.7;
    const freq3 = 8.1;
    const n1 = noise3D(nx * freq1 + t, ny * freq1 - t * 0.6, nz * freq1);
    const n2 = noise3D(nx * freq2 - t * 1.3, ny * freq2 + t * 0.4, nz * freq2 + t * 0.7);
    const n3 = noise3D(nx * freq3 + t * 2.1, ny * freq3, nz * freq3 - t * 1.6);
    const elevation = n1 * 0.6 + n2 * 0.3 + n3 * 0.1; // roughly -1..1

    const baseRadius = 5.4;
    const relief = 0.62;
    const radius = baseRadius + elevation * relief;

    target.set(nx * radius, ny * radius, nz * radius);

    // --- color: dark charcoal valleys through silver ridgelines ---
    const level = Math.max(0, Math.min(1, (elevation + 1) * 0.5));
    const lightness = 0.16 + level * level * 0.56;
    const hue = 0.62 - level * 0.03; // cool steel hue, brightens toward silver-white
    const saturation = 0.06 + (1 - level) * 0.05;
    color.setHSL(hue, saturation, lightness);

    if (scratch) scratch.elevation = elevation;
  };
}

function ParticleGlobe({ count = 22000, paused = false }) {
  const pointsRef = useRef(null);
  const timeRef = useRef(0);
  const scratchTarget = useMemo(() => new THREE.Vector3(), []);
  const scratchColor = useMemo(() => new THREE.Color(), []);
  const scratchInfo = useMemo(() => ({ elevation: 0 }), []);
  const noise3D = useMemo(() => createNoise3D(), []);
  const updateParticle = useMemo(() => buildParticleUpdate(noise3D), [noise3D]);

  const { positions, colors } = useMemo(() => {
    return {
      positions: new Float32Array(count * 3),
      colors: new Float32Array(count * 3)
    };
  }, [count]);

  useEffect(() => {
    const points = pointsRef.current;
    if (!points) return;
    const posAttr = points.geometry.getAttribute('position');
    const colorAttr = points.geometry.getAttribute('color');
    for (let i = 0; i < count; i++) {
      updateParticle(i, count, scratchTarget, scratchColor, 0, scratchInfo);
      const i3 = i * 3;
      positions[i3] = scratchTarget.x;
      positions[i3 + 1] = scratchTarget.y;
      positions[i3 + 2] = scratchTarget.z;
      colors[i3] = scratchColor.r;
      colors[i3 + 1] = scratchColor.g;
      colors[i3 + 2] = scratchColor.b;
    }
    posAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;
    points.geometry.computeBoundingSphere();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    if (!points) return;
    if (!paused) timeRef.current += Math.min(delta, 1 / 30);
    const time = timeRef.current;

    const posAttr = points.geometry.getAttribute('position');
    const colorAttr = points.geometry.getAttribute('color');
    const posArray = posAttr.array;
    const colorArray = colorAttr.array;

    for (let i = 0; i < count; i++) {
      updateParticle(i, count, scratchTarget, scratchColor, time, scratchInfo);
      const i3 = i * 3;
      posArray[i3] = scratchTarget.x;
      posArray[i3 + 1] = scratchTarget.y;
      posArray[i3 + 2] = scratchTarget.z;
      colorArray[i3] = scratchColor.r;
      colorArray[i3 + 1] = scratchColor.g;
      colorArray[i3 + 2] = scratchColor.b;
    }
    posAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;

    points.rotation.y = time * 0.06;
    points.rotation.x = Math.sin(time * 0.05) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        vertexColors
        transparent
        opacity={0.92}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Pointer({ intensity = 0.35 }) {
  const { camera, size } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = e => {
      if (e.pointerType === 'touch') return; // don't nudge the camera during scroll swipes
      target.current.x = (e.clientX / size.width) * 2 - 1;
      target.current.y = -(e.clientY / size.height) * 2 + 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [size]);

  useFrame(() => {
    camera.position.x += (target.current.x * intensity - camera.position.x) * 0.03;
    camera.position.y += (target.current.y * intensity - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function TerraNature({ count = 22000, paused = false, className = '', style }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  // Lazy initializer runs during the client hydration render (window exists there),
  // so a coarse-pointer/narrow device gets a lighter particle budget from its very
  // first frame — no post-mount resize, and since particle count never affects the
  // server-rendered DOM, there is nothing here for hydration to mismatch on.
  const [effectiveCount] = useState(() => {
    if (typeof window === 'undefined') return count;
    const coarse = window.matchMedia?.('(pointer: coarse)').matches;
    const narrow = window.innerWidth < 768;
    return coarse || narrow ? Math.min(count, 7000) : count;
  });
  const [dpr] = useState(() => {
    if (typeof window === 'undefined') return [1, 2];
    return window.matchMedia?.('(pointer: coarse)').matches ? [1, 1.5] : [1, 2];
  });

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return (
    <div
      className={className}
      style={{ width: '100%', height: '100%', touchAction: 'pan-y', ...style }}
      aria-hidden="true"
    >
      <Canvas
        dpr={dpr}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 12], fov: 42 }}
      >
        <ParticleGlobe count={effectiveCount} paused={paused || reducedMotion} />
        {!reducedMotion && <Pointer />}
      </Canvas>
    </div>
  );
}
