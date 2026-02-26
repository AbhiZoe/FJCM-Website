import { Metadata } from 'next'
import ScrollReveal from '@/components/animations/ScrollReveal'

export const metadata: Metadata = {
  title: 'Sermons | The Fullness of Jesus Christ Ministries',
  description: 'Watch and listen to our powerful sermons by Prophet Johnson Zoe.',
}

const SERMONS = [
  { id: '1', title: 'Walking in the Fullness of God', speaker: 'Prophet Johnson Zoe', date: 'February 23, 2026', youtubeId: 'dQw4w9WgXcQ', description: "Discover what it means to live in the fullness of God's presence and power." },
  { id: '2', title: 'The Power of Perfect Love', speaker: 'Prophet Johnson Zoe', date: 'February 16, 2026', youtubeId: 'dQw4w9WgXcQ', description: "Understanding the transformative power of God's perfect love in our lives." },
  { id: '3', title: 'Boldness in the Day of Judgment', speaker: 'Prophet Johnson Zoe', date: 'February 9, 2026', youtubeId: 'dQw4w9WgXcQ', description: 'How perfect love casts out fear and gives us boldness before God.' },
  { id: '4', title: 'As He Is, So Are We', speaker: 'Prophet Johnson Zoe', date: 'February 2, 2026', youtubeId: 'dQw4w9WgXcQ', description: 'Understanding our identity in Christ and how it shapes our daily lives.' },
  { id: '5', title: 'The Spirit of Adoption', speaker: 'Prophet Johnson Zoe', date: 'January 26, 2026', youtubeId: 'dQw4w9WgXcQ', description: 'Discovering our sonship and inheritance as children of God.' },
  { id: '6', title: 'Kingdom Authority', speaker: 'Prophet Johnson Zoe', date: 'January 19, 2026', youtubeId: 'dQw4w9WgXcQ', description: 'Walking in the authority Christ has given to every believer.' },
]

export default function SermonsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-900 to-church-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Word of God</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Sermons</h1>
            <p className="text-gray-300 text-lg">
              Powerful messages from the Word of God to transform your life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERMONS.map((sermon, index) => (
              <ScrollReveal key={sermon.id} delay={index * 0.08}>
                <article className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg`}
                      alt={sermon.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors cursor-pointer">
                      <div className="w-14 h-14 bg-gold/90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-2">{sermon.date}</p>
                    <h2 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {sermon.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{sermon.speaker}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{sermon.description}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-soft-blue hover:text-blue-600 font-semibold text-sm"
                    >
                      Watch Now →
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
