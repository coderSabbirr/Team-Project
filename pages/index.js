<<<<<<< HEAD

import Meta from '../Components/Meta'


export default function Home() {
  return (
    <>
    <Meta />
    welcome

    welcome
    </>
=======
import Banner from "../Components/Banner/Banner";
import AllFrelancers from "../Components/Frelancers/AllFrelancers/AllFrelancers";
import Navbar from "../Components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="main-container">
      <Navbar/>
      <Banner/>
      <AllFrelancers/>
    </div>
>>>>>>> origin/tunvir
  )
}
