'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'

const GALLERY_ITEMS = [
  { id: '1', category: 'Worship', caption: 'Sunday Worship Service', color: 'from-purple-400 to-purple-600', emoji: '🙌' },
  { id: '2', category: 'Community', caption: 'Community Fellowship', color: 'from-blue-400 to-blue-600', emoji: '👥' },
  { id: '3', category: 'Youth', caption: 'Youth Conference', color: 'from-green-400 to-green-600', emoji: '⚡' },
  { id: '4', category: 'Prayer', caption: 'Prayer Meeting', color: 'from-yellow-400 to-yellow-600', emoji: '🙏' },
  { id: '5', category: 'Worship', caption: 'Praise & Worship Night', color: 'from-pink-400 to-pink-600', emoji: '🎵' },
  { id: '6', category: 'Community', caption: 'Church Outreach', color: 'from-red-400 to-red-600', emoji: '❤️' },
  { id: '7', category: 'Special', caption: 'Christmas Celebration', color: 'from-indigo-400 to-indigo-600', emoji: '⭐' },
  { id: '8', category: 'Youth', caption: 'Youth Bible Study', color: 'from-teal-400 to-teal-600', emoji: '📖' },
  { id: '9', category: 'Special', caption: 'Easter Service', color: 'from-orange-400 to-orange-600', emoji: '✝️' },
]

const CATEGORIES = ['All', 'Worship', 'Community', 'Youth', 'Prayer', 'Special']

type GalleryItem = typeof GALLERY_ITEMS[0]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filtered = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory)

  return (
    <div className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-900 to-church-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Moments</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Gallery</h1>
            <p className="text-gray-300 text-lg">
              Capturing the beauty of our church community and celebrations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gold text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gold/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid"
                >
                  <div
                    className={`relative bg-gradient-to-br ${item.color} rounded-2xl overflow-hidden cursor-pointer group`}
                    style={{ height: item.id === '1' || item.id === '5' ? '300px' : '200px' }}
                    onClick={() => setSelectedItem(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
                    aria-label={`View ${item.caption}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                      {item.emoji}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                      <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-semibold text-sm">{item.caption}</p>
                        <p className="text-white/70 text-xs">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className={`relative bg-gradient-to-br ${selectedItem.color} rounded-3xl w-full max-w-2xl h-96 flex items-center justify-center`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-8xl mb-4">{selectedItem.emoji}</div>
                <p className="text-white text-2xl font-serif font-bold">{selectedItem.caption}</p>
                <p className="text-white/70 mt-2">{selectedItem.category}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
