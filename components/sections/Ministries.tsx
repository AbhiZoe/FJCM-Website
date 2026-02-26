import ScrollReveal from '@/components/animations/ScrollReveal'

const MINISTRIES = [
  { name: 'Worship Ministry', description: 'Leading the congregation in spirit-filled worship and praise.', icon: '🎵', contact: 'worship@fjcm.org' },
  { name: "Children's Ministry", description: 'Nurturing the faith of our youngest members through engaging programs.', icon: '👶', contact: 'children@fjcm.org' },
  { name: 'Youth Ministry', description: 'Empowering the next generation to walk boldly in their faith.', icon: '🌟', contact: 'youth@fjcm.org' },
  { name: 'Prayer Ministry', description: 'Interceding for the church, community, and world in powerful prayer.', icon: '🙏', contact: 'prayer@fjcm.org' },
  { name: 'Outreach Ministry', description: 'Sharing the love of Christ through community service and evangelism.', icon: '❤️', contact: 'outreach@fjcm.org' },
  { name: 'Media Ministry', description: 'Spreading the gospel through digital platforms and productions.', icon: '📸', contact: 'media@fjcm.org' },
]

export default function Ministries() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">
              Serve &amp; Grow
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Our Ministries
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find your place to serve and grow in our vibrant church ministries.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MINISTRIES.map((ministry, index) => (
            <ScrollReveal key={ministry.name} delay={index * 0.08}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
                <div className="text-4xl mb-4">{ministry.icon}</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold transition-colors">
                  {ministry.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {ministry.description}
                </p>
                <a href={`mailto:${ministry.contact}`} className="text-soft-blue text-sm hover:underline">
                  {ministry.contact}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
