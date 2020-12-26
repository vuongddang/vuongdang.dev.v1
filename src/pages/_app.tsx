import { AppProps } from 'next/app'
import '../styles/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { ReactElement } from 'react'
import SiteLayout from '../layouts/SiteLayout'

library.add(fab)

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}
