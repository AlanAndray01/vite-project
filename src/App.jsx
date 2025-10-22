import React from 'react'
import Navbar from './components/Navbar'
import Performance from './components/Performance'
import Hero from './components/Hero'
import Productviewer from './components/Productviewer'
import gsap from 'gsap'
import { ScrollTrigger} from 'gsap/all'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar /> 
      <Hero />
      <Productviewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App
