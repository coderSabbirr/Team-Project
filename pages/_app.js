import '../styles/globals.css'

<<<<<<< HEAD
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
=======
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
>>>>>>> tahrimur_rashid
}

export default MyApp
