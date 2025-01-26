'use client'

import Image from "next/image"
import Link from "next/link"
import type { Project } from "./featuredProject"

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden mx-10
    transition-transform duration-300 hover:scale-105 dark:bg-gray-800">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="h-48 w-full object-cover md:h-full md:w-48"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Featured</div>
          <h3 className="mt-2 text-2xl leading-tight font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="mt-4 text-gray-600 dark:text-white">{project.description}</p>
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard