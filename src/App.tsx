import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import About from "./Sections/About"
import Contact from "./Sections/Contact"
import CTA from "./Sections/CTA"
import Features from "./Sections/Features"
import Hero from "./Sections/Hero"
import Services from "./Sections/Services"
import Testimonials from "./Sections/Testimonials"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Services/>
      <About/>
      <CTA/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App