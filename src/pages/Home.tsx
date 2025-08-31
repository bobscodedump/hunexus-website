import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Solutions from '../components/Solutions';
import WhyHuNexus from '../components/WhyHuNexus';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='min-h-screen bg-black relative overflow-hidden'>
      {/* Dynamic Gradient Background */}
      <div
        className='fixed inset-0 transition-all duration-1000 ease-out'
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(214, 51, 132, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #1a0b3d 50%, #000000 100%)
          `,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Floating Orbs */}
      <div className='fixed inset-0 pointer-events-none'>
        <motion.div
          className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full'
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-3/4 right-1/4 w-48 h-48 rounded-full'
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <Navigation />

      <main className='relative z-10'>
        <Hero />
        <Features />
        <HowItWorks />
        <Solutions />
        <WhyHuNexus />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className='relative z-10 py-12 px-6 border-t border-white/10'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-4 gap-8 mb-8'>
            <div>
              <h3 className='text-white font-bold text-xl mb-4'>NxComm</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Building agentic AI workflows that think, act, and optimize at scale.
              </p>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-4'>Services</h4>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>AI Workflow Design</li>
                <li>Custom Automation</li>
                <li>System Integration</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-4'>Industries</h4>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>Tech Startups</li>
                <li>SME Businesses</li>
                <li>Growth Enterprises</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-4'>Locations</h4>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>Singapore</li>
                <li>Vietnam</li>
                <li>Global Delivery</li>
              </ul>
            </div>
          </div>
          <div className='border-t border-white/10 pt-8 text-center'>
            <p className='text-gray-400 text-sm'>
              © 2024 NxComm. All rights reserved. Pioneering intelligent automation for the next generation of business.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
