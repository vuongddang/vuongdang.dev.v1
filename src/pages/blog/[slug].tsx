import { GetStaticPaths, GetStaticProps } from 'next'
import { ReactElement } from 'react'
import { MdxRemote } from 'next-mdx-remote/types'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

interface PostPageProps {
  mdxSource: MdxRemote.Source
  frontMatter: any //TODO define type of frontMatter
}

const POSTS_DIR = path.join(process.cwd(), 'posts')
const components: MdxRemote.Components = {}

export default function PostPage({ mdxSource, frontMatter }: PostPageProps): ReactElement {
  const content = hydrate(mdxSource, { components })
  return (
    <article className="max-w-4xl mx-auto">
      <div>
        <h1 className="mt-10 mb-8 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl sm:mt-14 sm:mb-10">
          {frontMatter.title}
        </h1>
      </div>
      <main className="text-gray-300 prose prose-dark lg:prose-xl max-w-none ">{content}</main>
    </article>
  )
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const postFilePath = path.join(POSTS_DIR, `${params.slug}.mdx`)

  const { content, data } = matter(fs.readFileSync(postFilePath))

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: { mdxSource, frontMatter: data },
  }
}

// TODO: Fix missing return type warning
// Read all file paths in posts directory, and return the list of {params: {slug: slug}}
export const getStaticPaths = async () => {
  const paths = fs
    .readdirSync(POSTS_DIR)
    .filter((path) => /\.mdx?$/.test(path))
    // Remove file extensions for each file name
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  const result = {
    paths,
    fallback: false,
  }

  console.log('+++', result)

  return result
}
