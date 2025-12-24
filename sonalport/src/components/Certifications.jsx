import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import LogoLoop from './LogoLoop';

const certifications = [
    'Networking Basics – Cisco',
    'Microsoft AI Innovation 2025',
    'Data Analysis in Quiver – Palantir',
    'Model Context Protocol – Anthropic',
    'Audio Processing & Automation',
    'Time Series Analysis – Infosys',
    'AI for Beginners – HP',
    'Data Science & Analytics – HP',
    'Foundry & AIP Builder – Palantir',
    'AI on Jetson Nano – NVIDIA',
    'AWS IoT Devices – AWS',
    'MATLAB Programming – MathWorks'
];

const Certifications = () => {
    return (
        <section id="certifications">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-4">Certifications</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="glass-card p-4 rounded-xl flex items-center gap-3"
                    >
                        <div className="p-2 rounded-lg bg-electric-blue/10 text-electric-blue">
                            <Award size={20} />
                        </div>
                        <span className="text-sm font-medium text-gray-200">{cert}</span>
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
                        <div className="text-4xl font-bold text-electric-blue">Certified</div>,
                        <div className="text-4xl font-bold text-cyber-teal">Skilled</div>,
                        <div className="text-4xl font-bold text-white">Verified</div>,
                        <div className="text-4xl font-bold text-electric-blue">Professional</div>,
                        <div className="text-4xl font-bold text-cyber-teal">Expert</div>,
                        <div className="text-4xl font-bold text-white">Qualified</div>
                    ]}
                    speed={18}
                    fade={true}
                    scaleOnHover={true}
                    logoHeight={40}
                />
            </motion.div>
        </section>
    );
};

export default Certifications;
