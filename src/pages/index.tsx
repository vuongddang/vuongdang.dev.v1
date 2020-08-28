// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GetStaticProps } from 'next'
import Technologies from '../components/Technologies'
import { ReactElement } from 'react'
import Intro from '../components/Intro'
import Head from 'next/head'

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>Vuong Dang - Full Stack Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen px-4 mx-auto sm:px-6 ">
        <main className="flex flex-col max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-8">
            <div>
              <Intro />
            </div>
            <div>
              <Technologies />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
