import { ReactElement } from 'react'

export default function Footer(): ReactElement {
  return (
    <footer className="sm:flex items-center flex-shrink-0 w-full max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
      <div className="text-gray-400">@{new Date().getFullYear()} Vuong Dang<span className="hidden sm:inline-block">.</span></div>
      <div className="mt-1 text-gray-400 sm:mt-0 sm:ml-2">Built with NextJS and TailwindCSS</div>
    </footer>
  )
}
