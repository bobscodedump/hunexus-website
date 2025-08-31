import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import GlassCard from './GlassCard';

export default function Hero() {
  const scrollToFeatures = () => {
    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='home' className='min-h-screen flex items-center justify-center px-6 pt-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='text-left'
          >
            <div className='mb-6'>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium backdrop-blur-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-white border border-white/30'
              >
                🚀 AI-Powered Automation
              </motion.span>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              <span className='text-white'>We Build</span>
              <br />
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Agentic AI Workflows
              </span>
              <br />
              <span className='text-white'>That Think, Act, and</span>
              <br />
              <span className='bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                Optimize at Scale
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl'>
              For startups, SMEs, and growth-stage businesses ready to scale — without hiring more people or managing
              more tools.
            </p>

            {/* Value Props */}
            <div className='flex flex-wrap gap-6 mb-8'>
              <div className='flex items-center text-white'>
                <div className='w-2 h-2 bg-cyan-400 rounded-full mr-3'></div>
                <span>Autonomous Workflows</span>
              </div>
              <div className='flex items-center text-white'>
                <div className='w-2 h-2 bg-purple-400 rounded-full mr-3'></div>
                <span>Scale Without Headcount</span>
              </div>
              <div className='flex items-center text-white'>
                <div className='w-2 h-2 bg-pink-400 rounded-full mr-3'></div>
                <span>Intelligent Optimization</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <motion.button
                onClick={scrollToContact}
                className='group backdrop-blur-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 hover:from-cyan-400/30 hover:to-purple-400/30 text-white border border-white/30 rounded-xl px-8 py-4 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/25'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
              >
                <span className='flex items-center justify-center space-x-2'>
                  <span className='font-semibold'>Start Your AI Journey</span>
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                </span>
              </motion.button>

              <motion.button
                onClick={scrollToFeatures}
                className='group backdrop-blur-xl bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl px-8 py-4 transition-all duration-500'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className='flex items-center justify-center space-x-2'>
                  <Play className='w-5 h-5' />
                  <span className='font-semibold'>See How It Works</span>
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='relative'
          >
            <GlassCard className='p-8'>
              <div className='aspect-video bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-xl flex items-center justify-center relative overflow-hidden'>
                <img
                  src='https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80'
                  alt='AI Workflow Automation'
                  className='w-full h-full object-cover rounded-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <h4 className='font-semibold text-lg'>AI Agents at Work</h4>
                  <p className='text-sm text-gray-300'>Autonomous task execution</p>
                </div>
              </div>
            </GlassCard>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className='absolute -top-6 -right-6'
            >
              <GlassCard className='p-4'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-white'>90%</div>
                  <div className='text-sm text-gray-300'>Time Saved</div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className='absolute -bottom-6 -left-6'
            >
              <GlassCard className='p-4'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-white'>24/7</div>
                  <div className='text-sm text-gray-300'>Autonomous</div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
