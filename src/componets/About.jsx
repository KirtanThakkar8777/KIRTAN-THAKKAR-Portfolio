import { Skills } from '../../constants/index.js'
import { use, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {
    const titleRef = useRef(null);
    const lineRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, scale: 0.5, rotation: -5 },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
            }
        );
        gsap.fromTo(
            lineRef.current,
            { scaleX: 0, },
            {
                scaleX: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
            }
        );

        if (cardsRef.current) {
            const cards = cardsRef.current.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 100,
                        rotateY: -30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotateY: 0,
                        delay: index * 0.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        }
    }, [])

    return (
        <section className="py-24 px-6 " id='about'>
            <div className="container mx-auto max-w-7xl px-6">
                <div className='text-center mb-16'>
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div ref={lineRef} className='h-1 w-20 gradient-bg text-center mx-auto'></div>
                </div>
                <div ref={cardsRef} className='grid grid-cols-3 gap-8'>
                    {Skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className='skill-card p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/50'
                            >
                                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className='font-bold text-xl mb-3'>{skill.title}</h3>
                                <p className='opacity-70 leading-relaxed'>{skill.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default About