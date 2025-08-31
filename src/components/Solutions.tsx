import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Building, ArrowRight } from 'lucide-react';
import GlassCard from './GlassCard';

export default function Solutions() {
  const solutions = [
    {
      icon: Rocket,
      title: 'Tech Startups',
      description: 'Accelerate your product roadmap with agentic systems that scale your output — not your team.',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Users,
      title: 'Small-Medium Businesses',
      description: 'Automate repetitive tasks and decision-making so your people can focus on what truly matters.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: Building,
      title: 'Growth-Stage Enterprises',
      description:
        'Deploy intelligent systems across operations, logistics, analytics, and CX — and let your business run itself.',
      gradient: 'from-pink-400 to-red-500',
    },
  ];

  return (
    <section id='solutions' className='py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Who We{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>Help</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            We work with businesses ready to scale smarter.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-8'>
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <GlassCard key={solution.title} className='p-8 group h-full flex flex-col' delay={index * 0.2}>
                <div className='flex-grow'>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-4'>{solution.title}</h3>
                  <p className='text-gray-300 leading-relaxed'>{solution.description}</p>
                </div>
                <div className='mt-8'>
                  <button className='flex items-center text-cyan-400 hover:text-white transition-colors duration-300 font-medium'>
                    Explore Solution
                    <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                  </button>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
