import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Cog, TrendingUp } from 'lucide-react';
import GlassCard from './GlassCard';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      step: '01',
      title: 'Discover',
      description: 'Get clarity on where automation delivers real impact in your business.',
      subtext: 'Delivered via your AI Competitiveness Report',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Compass,
      step: '02',
      title: 'Design',
      description: 'Custom architecture for intelligent workflows tailored to your tools, goals, and budget.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: Cog,
      step: '03',
      title: 'Deploy',
      description: 'We build and integrate AI agents, pipelines, and dashboards — end to end.',
      gradient: 'from-pink-400 to-red-500',
    },
    {
      icon: TrendingUp,
      step: '04',
      title: 'Optimize',
      description: 'We monitor, retrain, and scale your systems so they grow with your business.',
      gradient: 'from-green-400 to-cyan-500',
    },
  ];

  return (
    <section id='how-it-works' className='py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            The Road to{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
              Agentic Automation
            </span>
          </h2>
          <div className='max-w-4xl mx-auto'>
            <p className='text-xl text-gray-300 mb-6 leading-relaxed'>
              AI isn't coming. It's already reshaping how lean teams outcompete big ones.
            </p>
            <p className='text-xl font-semibold text-white mb-8'>
              The companies automating today will dominate their industries tomorrow.
            </p>
            <p className='text-lg text-gray-300'>Our 4‑Stage Transformation Path:</p>
          </div>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className='relative'
              >
                <GlassCard className='p-8 text-center h-full flex flex-col'>
                  {/* Step Number */}
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg`}
                  >
                    {step.step}
                  </div>
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} bg-opacity-20 flex items-center justify-center mx-auto mb-6`}
                  >
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-4'>{step.title}</h3>
                  <p className='text-gray-300 leading-relaxed mb-4 flex-grow'>{step.description}</p>
                  {step.subtext && (
                    <div className='mt-4 pt-4 border-t border-white/10'>
                      <p className='text-sm text-cyan-400 font-medium'>→ {step.subtext}</p>
                    </div>
                  )}
                </GlassCard>
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/30 to-transparent transform -translate-y-1/2 z-10'></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='text-center mt-16'
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className='group backdrop-blur-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 hover:from-cyan-400/30 hover:to-purple-400/30 text-white border border-white/30 rounded-xl px-8 py-4 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/25'
            style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
          >
            <span className='flex items-center justify-center space-x-2'>
              <span className='font-semibold'>Start Your Transformation</span>
              <span className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'>→</span>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
