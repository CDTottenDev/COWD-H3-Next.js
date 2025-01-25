import { Metadata } from 'next'
import { Hero } from './pages/home/components/Hero'
export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {

  return (
    <div>
      <Hero />
    </div>
  )
}