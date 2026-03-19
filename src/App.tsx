import Navbar from "./components/layout/Navbar"
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
      <CTA/>
    </div>
  )
}

export default App