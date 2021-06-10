import { MdxFrontMatter, ParsedMdx } from '@models/mdx.model'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism-2'
import readingTime from 'reading-time'

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export async function parsePostAsMdxFile(slug: string): Promise<ParsedMdx> {
  const postFilePath = path.join(BLOG_CONTENT_DIR, `${slug}.mdx`)

  const { content, data } = matter(fs.readFileSync(postFilePath))

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  })

  const frontMatter = {
    ...data,
    slug,
    readingTimeStats: readingTime(content),
  } as MdxFrontMatter

  return { mdxSource, frontMatter }
}

export async function getAllSlugs(): Promise<string[]> {
  return (
    fs
      .readdirSync(BLOG_CONTENT_DIR)
      .filter((path) => /\.mdx?$/.test(path))
      // Remove file extensions for each file name
      .map((path) => path.replace(/\.mdx?$/, ''))
  )
}

export async function getAllPostsFrontMatter(): Promise<MdxFrontMatter[]> {
  const posts = fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((fileName) => /\.mdx$/.test(fileName))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const postFilePath = path.join(BLOG_CONTENT_DIR, fileName)
      const { content, data } = matter(fs.readFileSync(postFilePath))

      return { ...data, slug, readingTimeStats: readingTime(content) }
    }) as MdxFrontMatter[]

  return posts
}
