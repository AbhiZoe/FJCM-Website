import { Metadata } from 'next'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { parseEventDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Events | The Fullness of Jesus Christ Ministries',
  description: 'Discover upcoming church events, conferences, and gatherings.',
}

const EVENTS = [
  { id: '1', title: 'Sunday Worship Service', date: 'March 2, 2026', time: '9:30 AM - 12:30 PM', location: 'Main Sanctuary', category: 'Worship', description: 'Join us for our weekly Sunday service filled with praise, worship, and the Word of God.' },
  { id: '2', title: 'Prayer & Fasting Week', date: 'March 8-14, 2026', time: '6:00 AM daily', location: 'Church Premises', category: 'Prayer', description: 'A week of consecration, prayer, and fasting for breakthrough in every area of life.' },
  { id: '3', title: 'Youth Conference 2026', date: 'March 20-22, 2026', time: 'All Day', location: 'Main Hall', category: 'Youth', description: 'An exciting 3-day conference empowering the next generation to walk in their divine destiny.' },
  { id: '4', title: "Women's Fellowship", date: 'March 28, 2026', time: '10:00 AM - 1:00 PM', location: 'Fellowship Hall', category: 'Fellowship', description: 'A special gathering for women to fellowship, be encouraged, and grow in faith together.' },
  { id: '5', title: 'Easter Sunday Celebration', date: 'April 5, 2026', time: '9:00 AM - 1:00 PM', location: 'Main Sanctuary', category: 'Special', description: 'Celebrate the resurrection of our Lord Jesus Christ with a powerful and festive service.' },
]

const categoryColors: Record<string, string> = {
  Worship: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  Prayer: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Youth: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Fellowship: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  Special: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
}

export default function EventsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-900 to-church-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Calendar</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Upcoming Events</h1>
            <p className="text-gray-300 text-lg">
              Come and be part of our church community gatherings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {EVENTS.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.08}>
                <article className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="text-center bg-gold/10 rounded-2xl p-5 min-w-[100px] flex flex-col items-center justify-center">
                      {(() => { const { day, month, year } = parseEventDate(event.date); return (<>
                        <p className="text-gold font-bold text-3xl font-serif leading-none">{day}</p>
                        <p className="text-gold text-sm uppercase font-semibold mt-1">{month}</p>
                        <p className="text-gray-400 text-xs mt-1">{year}</p>
                      </>); })()}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${categoryColors[event.category] || 'bg-gray-100 text-gray-700'}`}>
                          {event.category}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {event.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-2">🕐 {event.time}</span>
                        <span className="flex items-center gap-2">📍 {event.location}</span>
                      </div>
                    </div>
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
