import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Productviewer from './components/Productviewer'
import gsap from 'gsap'
import { ScrollTrigger} from 'gsap/all'
import Showcase from './components/Showcase'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar /> 
      <Hero />
      <Productviewer />
      <Showcase />
    </main>
  )
}

export default App
