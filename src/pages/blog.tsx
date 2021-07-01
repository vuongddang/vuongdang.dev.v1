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
      <div className="pt-16 pb-16 sm:py-24 ">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 md:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-6xl">Blog</h2>
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

  return { props: { posts } }
}
