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
  )
}
