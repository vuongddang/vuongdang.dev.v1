import React, { ReactElement } from 'react'
import { MdxFrontMatter } from '../models/mdx.model'
import Link from 'next/link'
import Date from './Date'
import ClockIcon from './ClockIcon'
interface Props {
  posts: MdxFrontMatter[]
}
export default function RecentBlogPosts({ posts }: Props): ReactElement {
  return (
    <>
      {/* <h2 className="text-5xl font-bold tracking-tight text-gray-100">Recent Blog Posts</h2> */}
      <h2 className="text-3xl font-extrabold tracking-wide text-gray-100 uppercase sm:text-6xl opacity-20">
        Recent Blog Posts
      </h2>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <a className="block mt-24">
            <h3 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl ">{post.title}</h3>
            <div className="flex items-center mt-3 text-gray-500">
              <Date isoString={post.publishedTime} />
              <ClockIcon className="w-5 h-5 ml-6" />
              <span className="ml-1">{post.readingTimeStats.text}</span>
            </div>
            <p className="mt-3 text-xl tracking-wide text-gray-400">{post.summary}</p>
          </a>
        </Link>
      ))}
    </>
  )
}
