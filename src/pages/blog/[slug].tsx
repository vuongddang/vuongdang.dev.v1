import { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import ClockIcon from '@components/ClockIcon'
import Date from '@components/Date'
import Image from 'next/image'

import 'prism-themes/themes/prism-material-dark.css'
import { ParsedMdx } from '@models/mdx.model'
import { getAllSlugs, parsePostAsMdxFile } from '@shared/utils/MdxUtils'
import BlogSeo from '@components/BlogSeo'

const components = {}

type PostPageProps = ParsedMdx

export default function PostPage({ mdxSource, frontMatter }: PostPageProps): ReactElement {
  return (
    <>
      <BlogSeo frontMatter={frontMatter} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="mt-10 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl sm:mt-14">
          {frontMatter.title}
        </h1>

        <div className="relative flex items-center py-4 mt-10 space-x-3 bg-gray-900 rounded-xl px-4 border-gray-500">
          <a
            href="https://twitter.com/VuongDDang"
            target="_blank"
            rel="nofollow noreferrer noopener"
            className="flex-shrink-0"
            type="button"
            aria-label="Twitter"
          >
            <span className="sr-only">Twitter</span>
            <Image className="rounded-full " src="/images/profile.jpg" width={72} height={72} alt="" />
          </a>
          <div className="flex-1 min-w-0">
            <a
              href="https://twitter.com/VuongDDang"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="focus:outline-none"
              aria-label="Twitter"
            >
              <span className="absolute inset-0" aria-hidden="true"></span>
              <p className="text-lg font-bold text-gray-300">Vuong Dang</p>
              <div className="flex items-center text-sm font-medium text-gray-500 truncate">
                <Date isoString={frontMatter.publishedTime} />
                <ClockIcon className="w-5 h-5 ml-3" />
                <span className="ml-1">{frontMatter.readingTimeStats.text}</span>
              </div>
            </a>
          </div>
        </div>
        <main className="mt-10 text-gray-300 prose prose-dark md:prose-2xl max-w-none ">
          <MDXRemote {...mdxSource} components={components} />
        </main>
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const parsedMdx = await parsePostAsMdxFile(params.slug as string)
  return {
    props: parsedMdx,
  }
}

// Read all file paths in posts directory, and return the list of {params: {slug: slug}}
export const getStaticPaths = async () => {
  const slugs = await getAllSlugs()
  const paths = slugs
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
