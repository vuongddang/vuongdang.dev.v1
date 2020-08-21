// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GetStaticProps } from 'next'
import Technologies from '../components/Technologies'
import { ReactElement } from 'react'
import Intro from '../components/Intro'

export default function Home(): ReactElement {
  return (
    <>
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
