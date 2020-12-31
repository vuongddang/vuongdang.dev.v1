// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactElement } from 'react'
import Intro from '@components/Intro'
import { MdxFrontMatter } from '@models/mdx.model'
import { GetStaticProps } from 'next'
import RecentBlogPosts from '@components/RecentBlogPosts'
import { getAllPostsFrontMatter } from '@shared/utils/MdxUtils'

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts: MdxFrontMatter[] = await getAllPostsFrontMatter()
  // Sort all post by date desc
  posts.sort((a, b) => (a.publishedTime > b.publishedTime ? -1 : 1))

  return { props: { posts } }
}
