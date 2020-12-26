export interface MdxFrontMatter {
  title: string
  date: string
  brief: string
  slug: string
  readingTimeStats: {
    text: string
    minutes: number
    time: number
    words: number
  }
}
