import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import acsaLogo from '../assets/acsa_logo.png';
import csiLogo from '../assets/csi_logo.png';
import greyMatterLogo from '../assets/grey_matter_logo.png';
import LogoLoop from './LogoLoop';

const experiences = [
    {
        role: 'Joint Treasurer',
        org: 'Advanced Communication Students Association, NMAMIT',
        period: '2025 - 2026',
        description: 'Managing financial records and coordinating events for the association.',
        logo: acsaLogo
    },
    {
        role: 'Social Media Head',
        org: 'CSI Student Branch, NMAMIT',
        period: 'Aug 2025 – Present',
        description: 'Lead digital strategy and content creation across LinkedIn and Instagram platforms. Manage social media presence for 500+ member technical community.',
        logo: csiLogo
    },
    {
        role: 'Member',
        org: 'Grey Matter NMAMIT (Literary & Quiz Club)',
        period: 'Dec 2024 – Present',
        description: 'Represented institution at Nitte Beacons 2025 in Debate and Quiz competitions. Competed in Business Quiz at NITK Incident 2025, securing Top 5 finish.',
        logo: greyMatterLogo
    }
];

const Experience = () => {
    return (
        <section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-4">Experience</h2>
            </motion.div>

            <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <span className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full bg-electric-blue ring-4 ring-midnight"></span>

                        <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
                            {/* Logo Box */}
                            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center overflow-hidden">
                                <img src={exp.logo} alt={exp.org} className="w-full h-full object-contain" />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1 sm:mt-0">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-electric-blue font-medium mb-4">
                                    <Briefcase size={16} />
                                    {exp.org}
                                </div>
                                <p className="text-gray-300">{exp.description}</p>
                            </div>
                        </div>
                    </motion.div>
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
                        <div className="text-4xl font-bold text-electric-blue">Leadership</div>,
                        <div className="text-4xl font-bold text-cyber-teal">Innovation</div>,
                        <div className="text-4xl font-bold text-white">Collaboration</div>,
                        <div className="text-4xl font-bold text-electric-blue">Problem Solving</div>,
                        <div className="text-4xl font-bold text-cyber-teal">Team Work</div>,
                        <div className="text-4xl font-bold text-white">Communication</div>
                    ]}
                    speed={20}
                    fade={true}
                    scaleOnHover={true}
                    logoHeight={40}
                />
            </motion.div>
        </section>
    );
};

export default Experience;
