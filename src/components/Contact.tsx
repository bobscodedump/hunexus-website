import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import GlassCard from './GlassCard';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id='contact' className='py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Get In{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>Touch</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-center mb-16 max-w-4xl mx-auto'
        >
          <GlassCard className='p-8'>
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Ready to Let Your Business Think for Itself?
            </h3>
            <div className='space-y-4 text-lg text-gray-300'>
              <p>If your team is buried in manual work…</p>
              <p>If your operations are lagging behind your ambition…</p>
              <p className='text-xl text-white font-semibold pt-4'>
                This is your invitation to step into the next evolution of business.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <GlassCard className='p-8'>
              <h3 className='text-2xl font-bold text-white mb-8'>Contact Information</h3>
              <div className='space-y-6'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-red-500 flex items-center justify-center'>
                    <MapPin className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <p className='text-white font-semibold'>Headquarter</p>
                    <p className='text-gray-300'>Singapore</p>
                  </div>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center'>
                    <Mail className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <p className='text-white font-semibold'>AI Enquiry</p>
                    <p className='text-gray-300'>enquiry@huexus.co</p>
                  </div>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center'>
                    <Mail className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <p className='text-white font-semibold'>General</p>
                    <p className='text-gray-300'>enquiry@nxcomm.com</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <GlassCard className='p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <Input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 w-full px-4'
                />
              </div>
              <div>
                <Input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 w-full px-4'
                />
              </div>
              <div>
                <Textarea
                  name='message'
                  placeholder='Your Message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 rounded-xl resize-none w-full p-4'
                />
              </div>
              <Button
                type='submit'
                className='w-full h-12 backdrop-blur-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 hover:from-cyan-400/30 hover:to-purple-400/30 text-white border border-white/30 rounded-xl font-semibold transition-all duration-500 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center'
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
              >
                <Send className='w-5 h-5 mr-2' />
                Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
