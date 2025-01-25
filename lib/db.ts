import { prisma } from './prisma'

export async function getPublishedPosts() {
  return prisma.post.findMany({
    where: { published: true },
    include: {
      author: true,
      category: true,
    },
    orderBy: { createdAt: 'desc' },
  })
}

export async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: { slug },
    include: {
      author: true,
      category: true,
    },
  })
} 