import Hero from '@/components/sections/Hero'
import FeaturedSermons from '@/components/sections/FeaturedSermons'
import UpcomingEvents from '@/components/sections/UpcomingEvents'
import Ministries from '@/components/sections/Ministries'
import CallToAction from '@/components/sections/CallToAction'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSermons />
      <UpcomingEvents />
      <Ministries />
      <CallToAction />
    </>
  )
}
