import { Menu, X } from 'lucide-react';
import { use, useState } from 'react';
import { navLinks } from '../../constants/index.js'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useGSAP(() => {
    const navTween = gsap.fromTo('nav',
      {
        backgroundColor: 'rgba(0,0,0,0)',
        borderBottom: 'rgba(0,0,0,0)'
      },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        duration: 0.8,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: 'nav',
          start: 'top top',
          toggleActions: 'play none none reverse',
        },
      });
  })

  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div className='mx-auto px-6 py-4 max-w-7xl flex justify-between items-center h-full'>
        <a href="" className='text-xl font-bold'>
          <span className='h-1 w-24 gradient-text mx-auto lg:mx-0 text-2xl'>
            KT
          </span>
        </a>
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className='hover:text-blue-400 transition-colors '
            >
              {link.label}
            </a>
          ))}
          <button className='cursor-pointer px-6 py-2 gradient-bg rounded-full font-medium gradient-bg-inverted'>
            <a
              href="/Kirtan_Thakkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
        {/* Mobile menu Button */}
        <button
          className='md:hidden'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile menu Navigation*/}
      {isOpen && (
        <div className='md:hidden glass'>
          <div className='px-6 py-4 space-y-4'>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='block py-2 hover:to-blue-400 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className='w-full px-6 py-2 gradient-bg rounded-full font-medium'>
               <a
              href="/Kirtan_Thakkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            </button>
          </div>
        </div>
      )

      }
    </nav>
  )
}
