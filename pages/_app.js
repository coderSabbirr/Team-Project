import '../styles/globals.css'

import App from 'next/app'
import { ResponsiveDrawer } from '../layout/ResponsiveDrawer'
import Navbar from '../Components/Navbar/Navbar'

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
      <Navbar>
           <Component {...pageProps}></Component>
      </Navbar>    
    )
  }
}

export default MyApp
