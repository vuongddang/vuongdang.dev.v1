import React, { ReactElement } from 'react'
import { MdxFrontMatter } from '../models/mdx.model'
import Link from 'next/link'
import Date from './Date'
import ClockIcon from './ClockIcon'
interface Props {
  posts: MdxFrontMatter[]
}
// A list of blog posts
export default function BlogPosts({ posts }: Props): ReactElement {
  return (
    <>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <a className="block mt-24 rounded sm:p-3 group focus:outline-none sm:focus-visible:ring-2 sm:focus-visible:ring-green-600">
            <h3 className="text-3xl font-bold tracking-tight text-gray-300 group-hover:text-green-400 sm:text-4xl transition-colors">
              {post.title}
            </h3>
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
