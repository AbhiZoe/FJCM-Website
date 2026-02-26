import ScrollReveal from '@/components/animations/ScrollReveal'
import Link from 'next/link'

const SAMPLE_EVENTS = [
  {
    id: '1',
    title: 'Sunday Worship Service',
    date: 'March 2, 2026',
    time: '9:30 AM - 12:30 PM',
    location: 'Main Sanctuary',
    category: 'Worship',
  },
  {
    id: '2',
    title: 'Prayer & Fasting Week',
    date: 'March 8-14, 2026',
    time: '6:00 AM daily',
    location: 'Church Premises',
    category: 'Prayer',
  },
  {
    id: '3',
    title: 'Youth Conference 2026',
    date: 'March 20-22, 2026',
    time: 'All Day',
    location: 'Main Hall',
    category: 'Youth',
  },
]

const categoryColors: Record<string, string> = {
  Worship: 'bg-gold/20 text-yellow-700',
  Prayer: 'bg-blue-100 text-blue-700',
  Youth: 'bg-green-100 text-green-700',
  Default: 'bg-gray-100 text-gray-700',
}

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">
              Come &amp; Join
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Upcoming Events
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {SAMPLE_EVENTS.map((event, index) => (
            <ScrollReveal key={event.id} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="text-center bg-gold/10 rounded-xl p-4 min-w-[80px]">
                  <p className="text-gold font-bold text-2xl font-serif">
                    {event.date.split(',')[0].split(' ')[1]}
                  </p>
                  <p className="text-gold text-xs uppercase">
                    {event.date.split(',')[0].split(' ')[0]}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[event.category] || categoryColors.Default}`}>
                        {event.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mt-2">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>🕐 {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                </div>
                <Link
                  href="/events"
                  className="text-soft-blue hover:text-blue-600 font-semibold text-sm whitespace-nowrap"
                >
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-white rounded-full transition-all duration-200 font-semibold"
          >
            View All Events →
          </Link>
        </div>
      </div>
    </section>
  )
}
