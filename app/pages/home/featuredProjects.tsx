import { Metadata } from "next"
import ProjectCard from "./components/ProjectCard"
import { featuredProject } from "./components/featuredProject"

export const metadata: Metadata = {
  title: 'Featured Projects - Your Company Name',
  description: 'Explore our featured projects showcasing innovative solutions in technology and artificial intelligence.',
  openGraph: {
    title: 'Featured Projects - Your Company Name',
    description: 'Explore our featured projects showcasing innovative solutions in technology and artificial intelligence.',
    images: [featuredProject.imageUrl],
  },
}

export default function FeaturedProjects() {
  return (
    <div className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-100 via-[#ffd6d6] to-gray-200 dark:from-gray-900 dark:via-[#ff2b2b6c] dark:to-gray-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 md:mb-8 text-center dark:text-white">
          Featured Project
        </h2>
        <ProjectCard project={featuredProject} />
      </div>
    </div>
  )
}