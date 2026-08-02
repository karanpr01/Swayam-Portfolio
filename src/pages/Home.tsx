import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"
import About from "../Sections/About"
import Contact from "../Sections/Contact"
import CTA from "../Sections/CTA"
import Featured from "../Sections/Features"
import Hero from "../Sections/Hero"
import Services from "../Sections/Services"
import Testimonials from "../Sections/Testimonials"



const Home = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <Featured/>
    <Services/>
    <About/>
    <CTA/>
    <Testimonials/>
    <Contact/>
    <Footer/>
   </>

  )
}

export default Home