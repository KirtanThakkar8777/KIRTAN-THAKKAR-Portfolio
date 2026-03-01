import { useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Hero } from './componets/Hero'
import { Navbar } from './componets/Navbar'
import About from './componets/About'
import Projects from './componets/Projects'
import Contact from './componets/Contact'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  
  return (
    <>
      <div className='min-h-screen top-0 -z-2 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px] bg-repeat text-white'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact/>
        <footer className="py-8 text-center text-white/50 text-sm border-t bg-[#00091d] border-white/10">
          <p>© 2026 Kirtan Thakkar. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}


export default App