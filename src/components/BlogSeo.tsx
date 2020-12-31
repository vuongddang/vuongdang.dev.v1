import { ArticleJsonLd, NextSeo } from 'next-seo'
import { ReactElement } from 'react'
import { MdxFrontMatter } from '../models/mdx.model'
interface Props {
  frontMatter: MdxFrontMatter
}

const baseUrl = 'https://vuongdang.dev'
const authorName = 'Vuong Dang'
export default function BlogSeo({ frontMatter }: Props): ReactElement {
  const url = `${baseUrl}/blog/${frontMatter.slug}`
  const featuredImage = {
    url: `${baseUrl}/images/blog/${frontMatter.slug}/cover.jpg`,
    alt: frontMatter.title,
    width: 1200,
    height: 630,
  }
  return (
    <>
      <NextSeo
        title={`${frontMatter.title} - ${authorName}`}
        description={frontMatter.summary}
        canonical={url}
        openGraph={{
          url,
          title: frontMatter.title,
          description: frontMatter.summary,
          images: [featuredImage],
          article: { publishedTime: frontMatter.publishedTime },
        }}
      ></NextSeo>
      {/* Adding Article structured data to your news, blog, and sports article page can enhance your appearance in Google Search results.
        https://developers.google.com/search/docs/data-types/article */}
      <ArticleJsonLd
        url={url}
        title={frontMatter.title}
        images={[featuredImage.url]}
        datePublished={frontMatter.publishedTime}
        authorName={authorName}
        publisherName={authorName}
        description={frontMatter.summary}
        publisherLogo={`${baseUrl}/images/profile.jpg`}
      ></ArticleJsonLd>
    </>
  )
}
