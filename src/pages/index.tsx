// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactElement } from 'react'
import Intro from '@components/Intro'
import { MdxFrontMatter } from '@models/mdx.model'
import { GetStaticProps } from 'next'
import BlogPosts from '@components/BlogPosts'
import { getAllPostsFrontMatter } from '@shared/utils/MdxUtils'

interface Props {
  posts: MdxFrontMatter[]
}
export default function Home({ posts }: Props): ReactElement {
  return (
    <>
      <div className="max-w-screen-xl px-4 pb-24 mx-auto sm:px-6 md:px-8 sm:pt-10">
        <Intro />
      </div>
      <div className="pt-16 pb-16 bg-slate-900 sm:py-24 ">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 md:px-8">
          <h2 className="text-3xl font-extrabold tracking-wide text-gray-100 uppercase sm:text-6xl opacity-30 sm:opacity-20">
            Recent Blog Posts
          </h2>
          <BlogPosts posts={posts} />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts: MdxFrontMatter[] = await getAllPostsFrontMatter()
  // Sort all post by date desc
  posts.sort((a, b) => (a.publishedTime > b.publishedTime ? -1 : 1))

  const recentPosts = posts.slice(0, 3)
  return { props: { posts: recentPosts } }
}
