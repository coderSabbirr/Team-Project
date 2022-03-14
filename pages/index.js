import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import AllFrelancers from "../Components/Frelancers/AllFrelancers/AllFrelancers";
import Blogs from "../Components/HomeBlog/Blogs";
import Navbar from "../Components/Navbar/Navbar";
import PhotoCollection from "../Components/PhotoCollection/PhotoCollection";
import PhotomaneaBox from "../Components/PhotomaneaBox/PhotomaneaBox";

export default function Home() {
  return (
    <div className="main-container">
      <Navbar/>
      <Banner/>
      <AllFrelancers/>
      <PhotomaneaBox/>
      <PhotoCollection/>
      <Blogs/>
      <Footer/>
    </div>
  )
}
