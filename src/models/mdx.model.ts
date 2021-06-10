import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface MdxFrontMatter {
  title: string
  summary: string
  publishedTime: string
  canonicalUrl: string
  slug: string
  readingTimeStats: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

export interface ParsedMdx {
  mdxSource: MDXRemoteSerializeResult
  frontMatter: MdxFrontMatter
}
