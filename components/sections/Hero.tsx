'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TextReveal from '@/components/animations/TextReveal'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-church-dark to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 75% 75%, #4A90E2 0%, transparent 50%)'
        }} />
      </div>
      
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-5 bg-gold"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full opacity-5 bg-soft-blue"
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Welcome text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold font-semibold uppercase tracking-widest text-sm mb-6"
        >
          Welcome to
        </motion.p>

        {/* Church Name with glow effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          The Fullness of{' '}
          <span className="text-gold gold-glow">Jesus Christ</span>
          <br />Ministries
        </motion.h1>

        {/* Pastor name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-300 text-lg mb-3"
        >
          Under the Leadership of <span className="text-gold font-semibold">Prophet Johnson Zoe</span>
        </motion.p>

        {/* Service time */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-400 text-sm mb-8"
        >
          📅 Sunday Service: 9:30 AM – 12:30 PM
        </motion.p>

        {/* Bible verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-2xl mx-auto mb-12 p-6 glass-card rounded-2xl"
        >
          <p className="text-gray-200 italic text-base md:text-lg leading-relaxed">
            <TextReveal
              text={'"Herein is our love made perfect, that we may have boldness in the day of judgment: because as he is, so are we in this world."'}
              delay={1.0}
            />
          </p>
          <p className="text-gold text-sm mt-3 font-semibold">– 1 John 4:17</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/sermons"
            className="px-8 py-4 bg-gold hover:bg-yellow-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold/30"
          >
            Watch Sermons
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full transition-all duration-300"
          >
            Join Our Community
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-gold rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
