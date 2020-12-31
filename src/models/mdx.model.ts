import { MdxRemote } from 'next-mdx-remote/types'

export interface MdxFrontMatter {
  title: string
  publishedTime: string
  summary: string
  slug: string
  readingTimeStats: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

export interface ParsedMdx {
  mdxSource: MdxRemote.Source
  frontMatter: MdxFrontMatter
}
