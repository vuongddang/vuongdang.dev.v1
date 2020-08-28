import { ReactElement } from 'react'
export default function Nav(): ReactElement {
  return (
    <nav className="flex-shrink-0 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 text-lg leading-6 tracking-wider text-white">
            Vuong Dang
            <p className="opacity-50">Software Engineer</p>
          </div>
          <div className="sm:block sm:ml-6">
            <div className="flex">
              <a
                href="https://blog.vuongdang.dev"
                className="px-3 pt-3 pb-2 font-medium leading-4 tracking-wider text-white transition duration-150 ease-in-out rounded-md hover:bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                My Blog
              </a>
            </div>
          </div>
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
