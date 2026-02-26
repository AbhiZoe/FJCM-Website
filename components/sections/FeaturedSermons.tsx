import ScrollReveal from '@/components/animations/ScrollReveal'
import Link from 'next/link'

const SAMPLE_SERMONS = [
  {
    id: '1',
    title: 'Walking in the Fullness of God',
    speaker: 'Prophet Johnson Zoe',
    date: 'February 23, 2026',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'The Power of Perfect Love',
    speaker: 'Prophet Johnson Zoe',
    date: 'February 16, 2026',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Boldness in the Day of Judgment',
    speaker: 'Prophet Johnson Zoe',
    date: 'February 9, 2026',
    youtubeId: 'dQw4w9WgXcQ',
  },
]

export default function FeaturedSermons() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">
              Word of God
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Featured Sermons
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_SERMONS.map((sermon, index) => (
            <ScrollReveal key={sermon.id} delay={index * 0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg`}
                    alt={sermon.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors">
                    <div className="w-14 h-14 bg-gold/90 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-2">{sermon.date}</p>
                  <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{sermon.speaker}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/sermons"
            className="inline-flex items-center px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-white rounded-full transition-all duration-200 font-semibold"
          >
            View All Sermons →
          </Link>
        </div>
      </div>
    </section>
  )
}
