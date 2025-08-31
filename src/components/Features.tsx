import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Brain, Zap, TrendingUp } from 'lucide-react';
import GlassCard from './GlassCard';

export default function Features() {
  const features = [
    {
      icon: Eye,
      title: 'Monitor Real-Time Data',
      description:
        'Continuously track performance across all your systems and platforms, identifying patterns and anomalies as they happen.',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Brain,
      title: 'Make Smart Decisions',
      description:
        'Use advanced AI reasoning to analyze complex scenarios and make optimal decisions based on your business rules and goals.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Execute Across Platforms',
      description:
        'Take immediate action across your entire tech stack, from CRMs to marketing tools, without human intervention.',
      gradient: 'from-pink-400 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Learn and Improve Autonomously',
      description: 'Continuously optimize performance based on outcomes, getting smarter and more effective over time.',
      gradient: 'from-green-400 to-cyan-500',
    },
  ];

  const clients = [
    { name: 'Intel', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/03/Intel-Logo.png' },
    { name: 'Infineon', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/Infineon-Logo.png' },
    { name: 'Motorola', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Motorola-Logo.png' },
  ];

  return (
    <section id='features' className='py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            We've delivered systems to world-class tech leaders.
          </h2>
          <h3 className='text-2xl md:text-3xl font-bold text-cyan-400 tracking-widest uppercase'>Our Past Clients</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-20'
        >
          {clients.map((client) => (
            <img
              key={client.name}
              src={client.logoUrl}
              alt={`${client.name} logo`}
              className='h-12 md:h-16 object-contain transition-opacity duration-300 opacity-70 hover:opacity-100'
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Why{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
              Agentic AI
            </span>{' '}
            Is the Future of Scale
          </h2>
          <div className='max-w-4xl mx-auto'>
            <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
              What if parts of your business could run themselves — while your team focused on strategy, growth, and
              customers?
            </p>
            <p className='text-xl text-white mb-8 leading-relaxed font-medium'>That's what we build.</p>
            <div className='backdrop-blur-xl bg-white/5 rounded-2xl border border-white/20 p-8 mb-8'>
              <div className='flex items-start space-x-4'>
                <div className='w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-white font-bold text-lg'>⚡</span>
                </div>
                <p className='text-lg text-gray-300 leading-relaxed text-left'>
                  <span className='font-semibold text-white'>
                    Agentic AI means intelligent systems that don't just analyze — they act.
                  </span>
                  <br />
                  They make decisions, take action, and optimize outcomes without constant human input.
                </p>
              </div>
            </div>
            <p className='text-lg text-gray-300 mb-12'>At HuNexus, we design systems that:</p>
          </div>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <GlassCard key={feature.title} className='p-8 group hover:scale-105 text-center' delay={index * 0.1}>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold text-white mb-4'>{feature.title}</h3>
                <p className='text-gray-300 leading-relaxed text-sm'>{feature.description}</p>
              </GlassCard>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='text-center'
        >
          <GlassCard className='p-8 inline-block'>
            <p className='text-2xl font-bold text-white mb-2'>These aren't tools.</p>
            <p className='text-xl text-gray-300'>They're systems that work for you.</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
