import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Calendar, Github, Terminal, Linkedin, Mail } from 'lucide-react';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Events', href: '#events' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = ({ theme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const isMinecraft = theme === 'minecraft';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-center">
                <div className={`glass-panel px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-midnight/80 backdrop-blur-md border-white/5' : 'bg-transparent border-transparent'
                    } ${isOpen ? 'rounded-2xl flex-col w-full md:w-auto md:flex-row md:rounded-full' : ''} ${isMinecraft ? '' : 'rounded-full'}`}>

                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#" className="text-xl font-bold tracking-tighter text-white mr-8">
                            SH.
                        </a>

                        {/* Social Links - Desktop */}
                        <div className="hidden md:flex items-center gap-4 mr-8 border-r border-white/10 pr-8">
                            <a href="https://calendly.com/sonalhhegde/30min" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-blue transition-colors" title="Book a Meet">
                                <Calendar size={20} />
                            </a>
                            <a href="https://github.com/Sonalhegde/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://leetcode.com/u/sonal_hegde/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors" title="LeetCode">
                                <Terminal size={20} />
                            </a>
                            <a href="https://linkedin.com/in/sonalhegde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" title="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:sonalhhegde@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors" title="Email">
                                <Mail size={20} />
                            </a>
                        </div>

                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-4 md:mt-0`}>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="/resume.png"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-5 py-2 text-sm font-medium transition-all hover:scale-105 ${isMinecraft ? 'minecraft-btn' : 'rounded-full bg-white/10 hover:bg-white/20 border border-white/10'}`}
                        >
                            View Resume
                        </a>

                        {/* Social Links - Mobile */}
                        <div className="flex md:hidden items-center gap-6 mt-4 pt-4 border-t border-white/10 w-full justify-center">
                            <a href="https://calendly.com/sonalhhegde/30min" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-blue transition-colors">
                                <Calendar size={20} />
                            </a>
                            <a href="https://github.com/Sonalhegde/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://leetcode.com/u/sonal_hegde/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                                <Terminal size={20} />
                            </a>
                            <a href="https://linkedin.com/in/sonalhegde" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:sonalhhegde@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
