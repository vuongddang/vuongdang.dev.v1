import { AppProps } from 'next/app'
import '../styles/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { ReactElement } from 'react'

library.add(fab, faCoffee)

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}
