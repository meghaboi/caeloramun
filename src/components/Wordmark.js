const SIZES = {
  sm: 'text-xl',
  md: 'text-3xl',
  lg: 'text-6xl sm:text-7xl md:text-8xl'
};

export default function Wordmark({ size = 'md', className = '' }) {
  return (
    <span className={`font-display inline-flex items-baseline leading-none ${SIZES[size]} ${className}`}>
      <span className="italic text-ink">Caelora</span>
      <span className="not-italic tracking-[0.05em] text-accent-bright">MUN</span>
    </span>
  );
}
