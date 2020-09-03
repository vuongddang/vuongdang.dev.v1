import Head from 'next/head'
import { ReactElement } from 'react'
import Nav from '../components/Nav'

type Props = {
  children: ReactElement
}
export default function SiteLayout(props: Props): ReactElement {
  return (
    <>
      <Head>
        <title>Vuong Dang - Full Stack Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col min-h-screen bg-black">
        <Nav />
        <main className="flex-grow w-full px-4 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">{props.children}</main>
      </div>
    </>
  )
}