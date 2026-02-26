import { Metadata } from 'next'
import ScrollReveal from '@/components/animations/ScrollReveal'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | The Fullness of Jesus Christ Ministries',
  description: 'Get in touch with The Fullness of Jesus Christ Ministries.',
}

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-900 to-church-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Get In Touch</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-gray-300 text-lg">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  We&apos;re Here For You
                </h2>
                
                <div className="space-y-6">
                  {[
                    { icon: '📍', label: 'Address', value: '123 Faith Avenue, Grace City, GC 00000' },
                    { icon: '📧', label: 'Email', value: 'info@fjcm.org' },
                    { icon: '📞', label: 'Phone', value: '+1 (555) 000-0000' },
                    { icon: '🕐', label: 'Service Times', value: 'Every Sunday: 9:30 AM – 12:30 PM' },
                    { icon: '🏢', label: 'Office Hours', value: 'Mon–Fri: 9:00 AM – 5:00 PM' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-gold font-semibold text-sm">{item.label}</p>
                        <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-gradient-to-r from-gold/10 to-soft-blue/10 rounded-2xl border border-gold/20">
                  <p className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Join Us This Sunday
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    You are warmly welcome to worship with us. Come as you are and experience the 
                    fullness of God&apos;s love in our community.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8">
                <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
