export const metadata = {
  title: 'BONDLOCK',
  description: 'Virtual Wedding Planning System with Augmented Reality',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Documentations from '@/components/documents'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Documentations />
      <Testimonials />
      <Newsletter />
    </>
  )
}
