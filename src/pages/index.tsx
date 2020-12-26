// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactElement } from 'react'
import Intro from '../components/Intro'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MdxFrontMatter } from '../models/mdx.model'
import { GetStaticProps } from 'next'
import readingTime from 'reading-time'
import RecentBlogPosts from '../components/RecentBlogPosts'

interface Props {
  posts: MdxFrontMatter[]
}
export default function Home({ posts }: Props): ReactElement {
  return (
    <>
      <div className="max-w-6xl px-4 pb-24 mx-auto sm:px-6 md:px-8 sm:pt-10">
        <Intro />
      </div>
      <div className="pt-16 pb-16 bg-gray-900 sm:py-24 ">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8">
          <RecentBlogPosts posts={posts} />
        </div>
      </div>
    </>
  )
}

// TODO: Extract util methods
const POSTS_DIR = path.join(process.cwd(), 'posts')
export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts: MdxFrontMatter[] = fs
    .readdirSync(POSTS_DIR)
    .filter((fileName) => /\.mdx$/.test(fileName))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const postFilePath = path.join(POSTS_DIR, fileName)
      const { content, data } = matter(fs.readFileSync(postFilePath))

      return { ...data, slug, readingTimeStats: readingTime(content) }
    }) as MdxFrontMatter[]

  posts.sort((a, b) => (a.date > b.date ? -1 : 1))

  return { props: { posts } }
}
