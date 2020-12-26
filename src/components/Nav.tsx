import { ReactElement } from 'react'
import Link from 'next/link'
export default function Nav(): ReactElement {
  return (
    <nav className="flex-shrink-0 bg-black">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/">
            <a className="flex-shrink-0 text-lg leading-6 tracking-wider text-white">
              Vuong Dang
              <p className="text-gray-300 opacity-70">Software Engineer</p>
            </a>
          </Link>
          {/* <div className="sm:block sm:ml-6">
            <Link href="/blog">
              <a className="px-3 py-2 font-medium leading-4 tracking-wider text-white transition duration-150 ease-in-out rounded-md focus:ring focus:ring-opacity-70 focus:ring-green-600 hover:bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-900">
                My Blog
              </a>
            </Link>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .a {
          @apply leading-5;
        }
      `}</style>
    </nav>
  )
}
