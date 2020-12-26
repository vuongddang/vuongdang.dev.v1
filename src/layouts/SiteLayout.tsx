import Head from 'next/head'
import React, { ReactElement } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

type Props = {
  children: ReactElement
}
export default function SiteLayout(props: Props): ReactElement {
  return (
    <html lang="en">
      <Head>
        <title>Vuong Dang - Full Stack Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col min-h-screen bg-black">
        <Nav />
        <main className="flex-grow w-full mx-auto">{props.children}</main>
        <Footer />
      </div>
    </html>
  )
}
