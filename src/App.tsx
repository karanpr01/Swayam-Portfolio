import Navbar from "./components/layout/Navbar"
import About from "./Sections/About"
import Contact from "./Sections/Contact"
import CTA from "./Sections/CTA"
import Features from "./Sections/Features"
import Hero from "./Sections/Hero"
import Services from "./Sections/Services"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Services/>
      <About/>
      <CTA/>
      <Contact/>
    </div>
  )
}

export default App