import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/profile_pic_2.jpg';

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center relative pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

                {/* Left Column: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center lg:justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-electric-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl glass-panel p-2">
                            <div className="w-full h-full rounded-full overflow-hidden bg-midnight">
                                <img
                                    src={profilePic}
                                    alt="Sonal Hegde"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white mb-8 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(0,122,255,0.15)] hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
                        </span>
                        <span className="font-medium tracking-wide">Open for work</span>
                        <span className="h-4 w-px bg-white/20 mx-1"></span>
                        <div className="flex items-center gap-1.5 text-gray-200">
                            <MapPin size={14} className="text-electric-blue drop-shadow-[0_0_8px_rgba(0,122,255,0.8)]" />
                            Muscat, Oman | Udupi,India. open for wrk
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        SONAL <span className="text-gradient-blue">HEGDE</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-xl mb-8 font-light mx-auto lg:mx-0">
                        Building <span className="text-white font-medium">intelligent systems</span> at the intersection of embedded hardware and artificial intelligence.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full bg-electric-blue hover:bg-blue-600 text-white font-medium transition-all hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(0,122,255,0.3)]"
                        >
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-6 py-3 rounded-full glass-panel hover:bg-white/10 text-white font-medium transition-all hover:scale-105 flex items-center gap-2"
                        >
                            Download Resume <Download size={18} />
                        </a>

                        {/* Social Links */}
                        <a
                            href="https://linkedin.com/in/sonalhegde"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full glass-panel hover:bg-white/10 text-white transition-all hover:scale-105 hover:text-electric-blue"
                            title="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:sonalhhegde@gmail.com"
                            className="p-3 rounded-full glass-panel hover:bg-white/10 text-white transition-all hover:scale-105 hover:text-electric-blue"
                            title="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
