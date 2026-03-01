import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../constants/index.js'

function Projects() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const projectsRef = useRef(null);
    const lineRef = useRef(null);
    const progressLineRef = useRef(null);

      useEffect(() => {
    // Animate title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Animate progress line
    if (progressLineRef.current && projectsRef.current) {
      gsap.fromTo(
        progressLineRef.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        }
      );
    }

    // Animate project cards and checkpoints
    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll('.project-card');
      const checkpoints = projectsRef.current.querySelectorAll('.checkpoint');
      
      cards.forEach((card, index) => {
        // Card animation
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Checkpoint animation
        if (checkpoints[index]) {
          gsap.fromTo(
            checkpoints[index],
            {
              scale: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            {
              scale: 1,
              backgroundColor: 'rgba(59, 130, 246, 1)',
              duration: 0.5,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6" id="projects">
            <div className="max-w-7xl mx-auto">
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-purple-600 mx-auto"></div>
                </div>

                <div className="relative">
                    {/* Timeline line - hidden on mobile */}
                    <div ref={lineRef} className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2">
                        {/* Progress line */}
                        <div
                            ref={progressLineRef}
                            className="absolute top-0 left-0 w-full bg-linear-to-b from-blue-500 to-purple-600 origin-top"
                            style={{ height: '100%' }}
                        ></div>
                    </div>

                    <div ref={projectsRef} className="space-y-24">
                        {projects.map((project, index) => (
                            <div key={index} className="relative">
                                {/* Checkpoint dot - hidden on mobile */}
                                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="checkpoint w-6 h-6 rounded-full border-4 border-slate-900 bg-white/10"></div>
                                </div>

                                {/* Project card - alternating sides on desktop */}
                                <div
                                    className={`project-card lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-auto'
                                        }`}
                                >
                                    <div className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-linner-to-t from-black/60 to-transparent"></div>
                                        </div>

                                        <div className="p-6 space-y-4">
                                            <h3 className="text-xl font-bold">{project.title}</h3>
                                            <p className="opacity-70 text-sm leading-relaxed">{project.description}</p>

                                            <div className="flex gap-2">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex gap-3 pt-2">
                                                <button className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors">
                                                    <Github className="w-4 h-4" />
                                                    <a href={project.href}>Code</a>
                                                </button>
                                                <button className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors">
                                                    <ExternalLink className="w-4 h-4" />
                                                    <a href={project.link}>Live Demo</a>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects