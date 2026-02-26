import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl text-gold font-bold mb-4">
              The Fullness of Jesus Christ Ministries
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              A place of worship, growth, and community. Join us every Sunday.
            </p>
            <p className="mt-3 text-sm">
              <span className="text-gold">Sunday Service:</span> 9:30 AM – 12:30 PM
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Sermons', 'Events', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>📧 info@fjcm.org</p>
              <p>📞 +1 (555) 000-0000</p>
              <p>📍 123 Faith Avenue, Grace City</p>
            </div>
            <div className="mt-4 flex gap-3">
              <a href="#" className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/40 transition-colors" aria-label="Facebook">
                <span className="text-xs text-gold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/40 transition-colors" aria-label="YouTube">
                <span className="text-xs text-gold">▶</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p className="font-serif italic text-gray-400 mb-2">
            &quot;Herein is our love made perfect...&quot; – 1 John 4:17
          </p>
          <p>© {new Date().getFullYear()} The Fullness of Jesus Christ Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
