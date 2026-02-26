'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-church-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 30% 50%, #D4AF37 0%, transparent 60%)'
      }} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">
            You Are Welcome
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us This Sunday
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            Every Sunday | 9:30 AM – 12:30 PM
          </p>
          <p className="text-gray-400 italic text-base mb-10 max-w-2xl mx-auto">
            &quot;As he is, so are we in this world&quot; – Experience the fullness of God&apos;s love in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gold hover:bg-yellow-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/sermons"
              className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-full transition-all duration-300"
            >
              Watch Online
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
