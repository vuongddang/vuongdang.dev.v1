// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactElement } from 'react'
import Intro from '../components/Intro'

export default function Home(): ReactElement {
  return (
    <>
      <div className=" grid grid-cols-1 lg:gap-8">
        <div>
          <Intro />
        </div>
        {/* <div>
          <Technologies />
        </div> */}
      </div>
    </>
  )
}
