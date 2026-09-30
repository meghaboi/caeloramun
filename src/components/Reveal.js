'use client';

import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 32, className = '', once = true, as = 'div' }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function RevealGroup({ children, className = '', stagger = 0.1 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = '', y = 28 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
