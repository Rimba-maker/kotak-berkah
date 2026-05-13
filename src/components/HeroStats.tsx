import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 1200, suffix: '+', label: 'Event dilayani' },
  { target: 3000, suffix: '', label: 'Box maksimal' },
  { target: 5, suffix: ' Thn', label: 'Berpengalaman' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) =>
    Math.round(v).toLocaleString('id-ID') + suffix
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [isInView]);

  return (
    <div ref={ref} className="stat-num">
      <motion.span>{display}</motion.span>
    </div>
  );
}

export default function HeroStats() {
  return (
    <motion.div
      className="hero-stats"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <Counter target={stat.target} suffix={stat.suffix} />
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}
