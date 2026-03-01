import React from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

export const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText('.NAME', { type: 'chars , words' });

    const paragraphSplit = new SplitText('.Subtitle', { type: 'lines' });

    heroSplit.chars.forEach((char)=> {char.classList.add('text-gradient')});

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.05
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1
    });
    gsap.from('.Elements', {
      scaleX: 0,
      transformOrigin: 'left center', 
      duration: 1.8,
      ease: 'expo.out',
      delay: 1.5
    });
    gsap.from('.btn', {
      opacity: 0,
      visibility: 0,
      duration: 1.8,
      ease: 'fade.out',
      stagger: 0.1,
      delay: 2
    });
  }, [])
  return (
    <section className='py-20 px-6 relative flex items-center min-h-screen'>
      <div className='container mx-auto max-w-7xl grid lg:grid-cols-2 items-center gap-12'>
        {/* Left Side */}
        <div className='space-y-6 text-center lg:text-left'>
          <div className='space-y-4'>
            <p className='Subtitle text-lg opacity-80'>Hello, I'm</p>
            <h1 className='NAME text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase'>Kirtan Thakkar</h1>
          </div>
          <div className='Elements h-1 w-24 gradient-bg mx-auto lg:mx-0'></div>
          <p className='Subtitle text-2xl md:text-3xl opacity-90'>
            MERN Stack Developer
          </p>
          <p className='Subtitle text-lg opacity-70 max-w-xl mx-auto lg:mx-0'>
            I'm a passionate MERN stack developer with a knack for crafting dynamic and responsive web applications. With expertise in MongoDB, Express.js, React, and Node.js, I thrive on creating seamless user experiences and efficient backend solutions. Let's build something amazing together!
          </p>
          <div className='flex gap-4 justify-center lg:justify-start pt-4'>
            <button className='btn cursor-pointer gradient-bg px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow'>
              <a href="#projects">View My Work</a>
            </button>
            <button className='btn cursor-pointer px-8 py-3 border border-current rounded-full font-medium hover:bg-white/5 transition-colors'>
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className='relative'>
          <div className='relative w-full aspect-square max-w-lg mx-auto'>
            {/* Decorative background elements */}
           <div className='absolute top-5 left-3 h-full w-full bg-purple-600/50 rounded-full blur-2xl'></div>
            {/* Main image */}
            <div className='relative z-10 w-full h-full overflow-hidden'>
              <img
                src="kirtan thakkar.jpeg"
                alt="Kirtan Thakkar"
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
