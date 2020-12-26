import React, { ReactElement } from 'react'
import { MdxFrontMatter } from '../models/mdx.model'
import Link from 'next/link'
interface Props {
  posts: MdxFrontMatter[]
}
export default function RecentBlogPosts({ posts }: Props): ReactElement {
  return (
    <>
      {/* <h2 className="text-5xl font-bold tracking-tight text-gray-100">Recent Blog Posts</h2> */}
      <h2 className="text-6xl opacity-20  font-extrabold tracking-wide uppercase text-gray-100">Recent Blog Posts</h2>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <a className="block mt-24">
            <h3 className="text-4xl font-bold tracking-tight text-gray-300 ">{post.title}</h3>
            <p className="mt-3 text-xl tracking-wide text-gray-400">{post.brief}</p>
          </a>
        </Link>
      ))}
    </>
  )
}
