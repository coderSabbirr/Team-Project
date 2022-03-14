import App from "next/app";
import Navbar from "../Components/Navbar/Navbar";
import { ResponsiveDrawer } from "../layout/ResponsiveDrawer";
import "../styles/globals.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    if (router.pathname.startsWith("/dash")) {
      return (
        <ResponsiveDrawer>
          <Component {...pageProps}></Component>
        </ResponsiveDrawer>
      );
    }

    return (
      <Navbar>
        <Component {...pageProps}></Component>
      </Navbar>
    );
  }
}

export default MyApp;
