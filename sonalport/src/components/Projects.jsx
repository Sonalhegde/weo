import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import pacmanImage from '../assets/pacman_game.png';
import LogoLoop from './LogoLoop';

const projects = [
    {
        id: 1,
        title: 'Kuldio',
        subtitle: 'AI-Enabled ESG Reporting System',
        description: 'Engineered an AI-driven Environmental, Social, and Governance (ESG) reporting platform specifically designed for Nordic market compliance requirements.',
        tech: ['Python', 'AI/ML', 'NLP', 'Data Analytics'],
        timeline: 'Nov 2025',
        details: 'Automated sustainability metrics collection, compliance tracking, and report generation using advanced natural language processing and machine learning models. Streamlined ESG reporting workflows for enterprise sustainability management.',
        image: null
    },
    {
        id: 2,
        title: 'Pac-Man AI',
        subtitle: 'Game Recreation with Intelligent AI',
        description: 'Developed a fully-functional Pac-Man game engine with sophisticated artificial intelligence systems.',
        tech: ['Python', 'Pygame', 'AI Algorithms'],
        timeline: 'Nov - Dec 2025',
        details: 'Architected complete game physics including maze navigation and collision detection. Engineered multi-state ghost AI featuring chase, scatter, frightened, and return-to-base behaviors with greedy pathfinding algorithms.',
        image: pacmanImage
    },
    {
        id: 3,
        title: 'TruthSnap',
        subtitle: 'AI-Powered Phishing Detection',
        description: 'Intelligent phishing detection platform leveraging machine learning for real-time threat identification.',
        tech: ['ML', 'Hugging Face', 'Cybersecurity'],
        timeline: 'HackFest 2025',
        details: 'Integrated Hugging Face transformers and open-source ML models for URL analysis, content classification, and threat scoring. Secured Top 10 position in Fintech track among 100+ participating teams.',
        image: null
    },
    {
        id: 4,
        title: 'Smart Med Dispenser',
        subtitle: 'IoT Healthcare Solution',
        description: 'IoT-enabled automated medication dispensing system for elderly and chronically ill patients.',
        tech: ['ESP8266', 'IoT', 'Embedded C', 'AWS'],
        timeline: 'Nov 2024 - Apr 2025',
        details: 'Developed embedded firmware for ESP8266 microcontroller integrating RTC module for precise scheduling. Engineered stepper motor control system for accurate medication dispensing. Implemented real-time cloud connectivity.',
        image: null
    }
];

const ProjectCard = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            className="glass-card rounded-3xl overflow-hidden"
        >
            <motion.div layout className="p-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-electric-blue font-medium">{project.subtitle}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{project.timeline}</span>
                </div>

                <p className="text-gray-300 mb-6 line-clamp-2">{project.description}</p>

                {/* Project Image Preview (if available) */}
                {project.image && (
                    <motion.div
                        layout
                        className="mb-6 rounded-xl overflow-hidden border border-white/10"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center hover:scale-105 transition-transform duration-500" />
                    </motion.div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue text-xs font-medium border border-electric-blue/20">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-center w-full mt-2 text-gray-500">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-8 pb-8 text-gray-400 border-t border-white/5 pt-4"
                    >
                        <p className="mb-4">{project.details}</p>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-electric-blue transition-colors">
                                <Github size={16} /> View Code
                            </button>
                            <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-electric-blue transition-colors">
                                <ExternalLink size={16} /> Live Demo
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">A selection of my recent work in AI, IoT, and Software Development.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Logo Loop */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16"
            >
                <LogoLoop
                    logos={[
                        <div className="text-4xl font-bold text-electric-blue">Python</div>,
                        <div className="text-4xl font-bold text-cyber-teal">React</div>,
                        <div className="text-4xl font-bold text-white">AI/ML</div>,
                        <div className="text-4xl font-bold text-electric-blue">IoT</div>,
                        <div className="text-4xl font-bold text-cyber-teal">ESP8266</div>,
                        <div className="text-4xl font-bold text-white">Pygame</div>,
                        <div className="text-4xl font-bold text-electric-blue">AWS</div>,
                        <div className="text-4xl font-bold text-cyber-teal">Hugging Face</div>
                    ]}
                    speed={30}
                    fade={true}
                    scaleOnHover={true}
                    logoHeight={40}
                />
            </motion.div>
        </section>
    );
};

export default Projects;
