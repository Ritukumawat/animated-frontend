import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Footer from './Components/Footer'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Project from './Components/Project'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Project />
      <Footer />
    </div>
  )
}

export default App
