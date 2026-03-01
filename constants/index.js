import { Code2, Palette, Zap, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const navLinks = [
   { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export const Skills = [
{
      icon: Code2,
      title: 'Development',
      description: 'knowledge of React, JavaScript, and modern web technologies. Building scalable applications with clean architecture.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating intuitive interfaces with attention to detail. Proficient in Figma, user research, and design systems.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency. Delivering fast, accessible, and responsive web experiences.',
    },
];

export const projects = [
    {
      title: 'Kashmiri Beverages',
      description: 'A full-stack website using MongoDB, Express.js, React.js, and Node.js. With user authentication and admin panel to read contact messages',
      image: 'Kashmiri-Beverage.png',
      href: "https://github.com/KirtanThakkar8777/Kashmiri-Beverages-website.git",
      link: "https://kashmiri-beverages-website.onrender.com/",
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    },
    {
      title: 'Food Tech – Food Ordering Website',
      description: 'Developeda basic foodordering website as part of a group learning exercise',
      image: 'Food Tech.png',
      tags: ['HTML', 'CSS', 'PHP'],
    },
  ];

export const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/KirtanThakkar8777' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kirtan-thakkar-28b543312/' },
    { icon: Mail, label: 'Email', href: 'mailto:Kirtanthakkar2835@gmail.com' },
  ];

