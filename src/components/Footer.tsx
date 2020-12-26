import { ReactElement } from 'react'

export default function Footer(): ReactElement {
  return (
    <footer className="flex justify-start flex-shrink-0 w-full px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-gray-400">@{new Date().getFullYear()} Vuong Dang</div>
    </footer>
  )
}
