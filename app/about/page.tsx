import { Metadata } from 'next'
import ScrollReveal from '@/components/animations/ScrollReveal'

export const metadata: Metadata = {
  title: 'About Us | The Fullness of Jesus Christ Ministries',
  description: 'Learn about our church history, mission, vision, and the leadership of Prophet Johnson Zoe.',
}

const VALUES = [
  { title: 'Faith', description: "We walk by faith, not by sight, trusting in God's perfect plan.", icon: '✝️' },
  { title: 'Love', description: 'As He is, so are we in this world – love is our foundation.', icon: '❤️' },
  { title: 'Community', description: 'We are stronger together, built on fellowship and mutual support.', icon: '🤝' },
  { title: 'Excellence', description: 'We offer our best to God in every area of ministry and life.', icon: '⭐' },
]

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-church-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Our Story</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-gray-300 text-lg">
              Discovering the fullness of God&apos;s love and purpose together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div>
                <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Our History</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Built on Faith, Grounded in Love
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  The Fullness of Jesus Christ Ministries was founded with a singular vision: to demonstrate 
                  the fullness of God&apos;s love to the world. From humble beginnings, our congregation has 
                  grown into a vibrant community of believers from all walks of life.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Under the anointed leadership of Prophet Johnson Zoe, we have seen God&apos;s hand move 
                  mightily in our midst—healing the broken, setting the captive free, and raising up 
                  a generation that reflects Jesus in every area of life.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="bg-gradient-to-br from-gold/10 to-soft-blue/10 rounded-3xl p-8 border border-gold/20">
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  To proclaim the fullness of Jesus Christ to all nations, making disciples who reflect 
                  God&apos;s love, power, and character in every sphere of society.
                </p>
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  A church where every believer walks in the fullness of God&apos;s purpose, demonstrating 
                  the kingdom of heaven on earth through love, signs, and wonders.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pastor Bio */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Leadership</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Meet Our Pastor
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-xl">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center mx-auto mb-6 text-5xl">
                  ✝️
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Prophet Johnson Zoe
                </h3>
                <p className="text-gold font-semibold mb-6">Senior Pastor &amp; Founder</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Prophet Johnson Zoe is a man of God called to demonstrate the fullness of Christ 
                  to this generation. With a heart for God and people, he leads with wisdom, compassion, 
                  and prophetic insight that transforms lives.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  His ministry is marked by signs, wonders, and a passion for God&apos;s Word. Under his 
                  leadership, thousands have come to know Christ and are walking in their divine destiny.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">What We Believe</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Our Core Values
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gold/50 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
