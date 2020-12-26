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
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 pb-24 pt-10">
        <Intro />
      </div>
      <div className="px-4 bg-gray-900 py-24 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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

  return { props: { posts } }
}
