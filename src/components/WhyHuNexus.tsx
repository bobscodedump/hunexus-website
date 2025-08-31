import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Globe } from 'lucide-react';
import GlassCard from './GlassCard';

export default function WhyHuNexus() {
  const advantages = [
    {
      icon: Wrench,
      title: 'Engineering Legacy',
      description: "We've built systems for mission-critical environments — and now apply that precision to AI.",
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Built for Speed',
      description: 'We scope, build, and ship fast. Weeks, not quarters.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Singapore & Vietnam Delivery Model',
      description: 'Top-tier tech talent, cross-border agility, and startup-speed execution.',
      gradient: 'from-pink-400 to-red-500',
    },
  ];

  return (
    <section id='why-hunexus' className='py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Meet Your{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>Builders</span>
          </h2>
        </motion.div>

        {/* Story and leadership sections omitted for brevity; could be added here if needed */}

        {/* Advantages Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <GlassCard key={advantage.title} className='p-8 group text-center h-full' delay={index * 0.2}>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>{advantage.title}</h3>
                <p className='text-gray-300 leading-relaxed'>{advantage.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
