// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GetStaticProps } from 'next'
import Technologies from '../components/Technologies'
import { ReactElement } from 'react'

export default function Home(): ReactElement {
  return (
    <>
      <div className="px-4 container min-h-screen mx-auto sm:px-6 lg:px-8">
        <main className="flex flex-col items-center">
          <Technologies />
        </main>
      </div>
    </>
  )
}
