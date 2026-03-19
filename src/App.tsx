import Navbar from "./components/layout/Navbar"
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
    </div>
  )
}

export default App