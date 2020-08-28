// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactElement } from 'react'
import Intro from '../components/Intro'
import Technologies from '../components/Technologies'

export default function Home(): ReactElement {
  return (
    <>
      <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-8">
        <div>
          <Intro />
        </div>
        <div>
          <Technologies />
        </div>
      </div>
    </>
  )
}
