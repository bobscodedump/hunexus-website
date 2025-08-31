import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
} & React.ComponentProps<'div'>;

export default function GlassCard({ children, className = '', hover = true, delay = 0, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
      className={`backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden group ${className}`}
      style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
      {...props}
    >
      {/* Subtle gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none' />
      {/* Hover glow effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-400/0 group-hover:from-cyan-400/5 group-hover:to-purple-400/5 transition-all duration-500 pointer-events-none' />
      <div className='relative z-10'>{children}</div>
    </motion.div>
  );
}
