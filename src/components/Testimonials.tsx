import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function Testimonials() {
  const clients = [
    { name: 'Intel', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/03/Intel-Logo.png' },
    { name: 'Infineon', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/Infineon-Logo.png' },
    { name: 'Motorola', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Motorola-Logo.png' },
  ];

  return (
    <section id='testimonials' className='py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            From Global Engineering to{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
              Intelligent Workflows
            </span>
          </h2>
        </motion.div>

        {/* Message card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-center mb-16'
        >
          <p className='text-xl text-gray-300 mb-6 max-w-3xl mx-auto'>
            And now, we help growth-focused companies like yours.
          </p>
          <GlassCard className='p-8 inline-block max-w-3xl'>
            <p className='text-2xl font-bold text-white mb-4'>
              Yesterday, we built for machines.
              <br />
              Today, we build machines that work for you.
            </p>
            <p className='text-lg text-gray-300'>
              From onboarding to reporting, dispatch to decision-making — if it's repeatable, we make it intelligent.
            </p>
          </GlassCard>
        </motion.div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-16'
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
      </div>
    </section>
  );
}
