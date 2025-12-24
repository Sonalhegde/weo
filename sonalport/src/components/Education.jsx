import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import nitteLogo from '../assets/nmamit_logo_yellow.jpg';
import collegeLogo from '../assets/college_logo.png';
import LogoLoop from './LogoLoop';

const educationData = [
    {
        id: 1,
        institution: 'NMAM Institute of Technology',
        sub: 'Nitte (Deemed to be University)',
        degree: 'B.Tech in Electronics and Communication',
        year: '2024 - 2028',
        logo: nitteLogo,
        details: [
            'Specializing in Embedded Systems & AI/ML',
            'Active member of CSI & Grey Matter'
        ],
        color: 'from-blue-500/20 to-purple-500/20'
    },
    {
        id: 2,
        institution: 'Karkala Jnanasudha PU College',
        sub: 'Pre-University Education',
        degree: 'Science (PCMC)',
        year: '2022 - 2024',
        logo: collegeLogo,
        details: [
            'Grade: 97% in Boards',
            'AIR 765 in JEE B.Planning',
            '95 Percentile in JEE B.Arch'
        ],
        color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
        id: 3,
        institution: 'Christ King',
        sub: 'Higher Secondary Education',
        degree: 'High School',
        year: 'Completed 2022',
        logo: null,
        details: [
            'Grade: 97.24%',
            'Academic Excellence Award'
        ],
        color: 'from-orange-500/20 to-red-500/20'
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white/50">
                    Academic Journey
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Building a strong foundation in engineering and technology.
                </p>
            </motion.div>

            <div className="space-y-12">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative"
                    >
                        {/* Connector Line */}
                        {index !== educationData.length - 1 && (
                            <div className="absolute left-8 top-24 bottom-[-48px] w-0.5 bg-gradient-to-b from-white/20 to-transparent hidden md:block"></div>
                        )}

                        <div className={`glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-500`}>
                            {/* Glitter/Spatial Background Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`}></div>

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="relative">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center p-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500">
                                        {edu.logo ? (
                                            <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain drop-shadow-lg" />
                                        ) : (
                                            <GraduationCap size={40} className="text-white/80" />
                                        )}
                                    </div>
                                    {/* Glowing Orb behind logo */}
                                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                </div>

                                <div className="flex-1 space-y-3">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all">
                                                {edu.institution}
                                            </h3>
                                            <p className="text-electric-blue text-base font-medium">{edu.sub}</p>
                                        </div>
                                        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 whitespace-nowrap">
                                            {edu.year}
                                        </span>
                                    </div>

                                    <div className="text-base text-gray-200 font-light">
                                        {edu.degree}
                                    </div>

                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {edu.details.map((detail, i) => (
                                            <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white shadow-lg shadow-blue-500/10 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                                                {i === 0 ? <Award size={16} className="text-yellow-400" /> : <BookOpen size={16} className="text-cyber-teal" />}
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>
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
                        <div className="text-4xl font-bold text-electric-blue">Excellence</div>,
                        <div className="text-4xl font-bold text-cyber-teal">Learning</div>,
                        <div className="text-4xl font-bold text-white">Growth</div>,
                        <div className="text-4xl font-bold text-electric-blue">Achievement</div>,
                        <div className="text-4xl font-bold text-cyber-teal">Knowledge</div>,
                        <div className="text-4xl font-bold text-white">Innovation</div>
                    ]}
                    speed={22}
                    fade={true}
                    scaleOnHover={true}
                    logoHeight={40}
                />
            </motion.div>
        </section>
    );
};

export default Education;
