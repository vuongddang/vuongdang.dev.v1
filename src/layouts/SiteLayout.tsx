import Head from 'next/head'
import { ReactElement } from 'react'

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
        <nav className="flex-shrink-0 bg-black">
          <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8"></div>
        </nav>
        <main className="flex-grow w-full mx-auto max-w-7xl xl:px-8">{props.children}</main>
      </div>
    </>
  )
}
