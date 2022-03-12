import '../styles/globals.css'

import App from 'next/app'
import { ResponsiveDrawer } from '../layout/ResponsiveDrawer'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    if (router.pathname.startsWith('/dash')) {
      return (
        <ResponsiveDrawer >
           <Component {...pageProps}></Component>
       </ResponsiveDrawer>
      )
    }

    return (
        <Component {...pageProps}></Component>
    )
  }
}

export default MyApp
