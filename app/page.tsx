import { Metadata } from 'next'
import { Hero } from './pages/home/Hero'
import dynamic from 'next/dynamic'

// Dynamic imports for components not needed immediately
const BackgroundLogo = dynamic(() => import('./pages/home/backgroundLogo'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-[400px] w-[400px] opacity-5" />
})

const PageBreak1 = dynamic(() => import('./pages/home/pageBreak1'))

const ServicesInfo = dynamic(() => import('./pages/home/servicesInfo'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96" />
})

const FeaturedProjects = dynamic(() => import('./pages/home/featuredProjects'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96" />
})

const About = dynamic(() => import('./pages/home/about'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96" />
})

const Testimonials = dynamic(() => import('./pages/home/testimonials'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96" />
})

const Footer = dynamic(() => import('./pages/home/footer'))

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div>
      <Hero />
      <BackgroundLogo />
      <PageBreak1 />
      <ServicesInfo />
      <PageBreak1 />
      <FeaturedProjects />
      <PageBreak1 />
      <About />
      <PageBreak1 />
      <Testimonials />
      <PageBreak1 />
      <Footer />
    </div>
  )
}