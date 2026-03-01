import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail } from 'lucide-react';
import { socialLinks } from '../../constants/index.js'

function Contact() {
    const titleRef = useRef(null);
    const lineRef = useRef(null);
    const descriptionRef = useRef(null);
    const socialLinksRef = useRef(null);
    const emailButtonRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: -50,
                letterSpacing: '20px'
            },
            {
                opacity: 1,
                y: 0,
                letterSpacing: 'normal',
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
            }
        );
        gsap.fromTo(
            lineRef.current,
            {
                scaleX: 0,
                rotation: -180,
            },
            {
                scaleX: 1,
                rotation: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
        gsap.fromTo(
            descriptionRef.current,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 0.7,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
            }
        );
        gsap.fromTo(
            descriptionRef.current,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 0.7,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        if (socialLinksRef.current) {
            const links = socialLinksRef.current.querySelectorAll('a');

            links.forEach((link, index) => {
                gsap.fromTo(
                    link,
                    {
                        opacity: 0,
                        y: 50,
                        rotation: -180,
                        scale: 0,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotation: 0,
                        scale: 1,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: socialLinksRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        },
                    }
                );

                link.addEventListener('mouseenter', () => {
                    gsap.to(link, {
                        scale: 1.2,
                        rotation: 360,
                        duration: 0.4,
                        ease: 'back.out(1.7)',
                    });
                });

                link.addEventListener('mouseleave', () => {
                    gsap.to(link, {
                        scale: 1,
                        rotation: 0,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                });
            });
        }
        gsap.fromTo(
            emailButtonRef.current,
            {
                opacity: 0,
                scale: 0,
                y: 50,
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                delay: 0.6,
                ease: 'elastic.out(1, 0.6)',
                scrollTrigger: {
                    trigger: emailButtonRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [])


    return (
        <section id="contact" className='py-24 px-6'>
            <div className='max-w-7xl mx-auto text-center'>
                <div className='text-center mb-16'>
                    <h2 ref={titleRef} className='font-bold text-4xl md:text-5xl mb-4'>Let's Connect</h2>
                    <div ref={lineRef} className='h-1 w-20 gradient-bg mx-auto mb-6 origin-center'></div>
                    <p ref={descriptionRef} className='opacity-70 text-lg max-w-2xl mx-auto'>Have a project in mind or want to collaborate? I'd love to hear from you.
                        Let's create something amazing together.
                    </p>
                </div>
                <div ref={socialLinksRef} className='flex justify-center gap-6 mb-12'>
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={index}
                                href={link.href}
                                className='w-14 h-14 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm flex justify-center items-center hover:bg-linear-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent transition-all'
                                aria-label={link.label}
                            >
                                <Icon className='w-6 h-6' />
                            </a>
                        );
                    })}
                </div>
                <a
                    ref={emailButtonRef}
                    href="mailto:kirtanthakkar2835@gmail.com"
                    className='inline-flex items-center gap-3 px-8 py-4 gradient-bg rounded-full font-medium text-lg hover:shadow-2xl transition-shadow'
                >
                    <Mail className="w-5 h-5" />
                    kirtanthakkar2835@gmail.com
                </a>
            </div>
        </section>
    )
}

export default Contact