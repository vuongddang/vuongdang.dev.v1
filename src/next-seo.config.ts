import { NextSeoProps } from 'next-seo'

const title = 'Vuong Dang - Full-stack web developer'
const description = 'Full-stack web developer, Java and TypeScript enthusiast'

const SEO: NextSeoProps = {
  title,
  description,
  canonical: 'https://vuongdang.dev/',
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_IE',
    url: 'https://vuongdang.dev/',
    images: [
      {
        url: 'https://vuongdang.dev/images/cover.png',
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@VuongDDang',
    site: '@VuongDDang',
    cardType: 'summary_large_image',
  },
}

export default SEO
