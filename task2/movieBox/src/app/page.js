import Navbar from "./sections/header/navbar";
import Header from "./sections/header/header";
import Featured from "./sections/Featured/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>  
    <Navbar/>
      <Header/>
      <Featured/>
      <Footer/>
    </>
  )
}
