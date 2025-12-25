import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import LogoLoop from './LogoLoop';
import devhackImage from '../assets/devhack_2025.png';
import hackfestImage from '../assets/hackfest_2025.png';
import nexovateImage from '../assets/nexovate_2025.jpg';

const events = [
    {
        id: 1,
        title: 'DevHack 2025',
        type: 'National Level Flagship Hackathon',
        role: 'Team Member',
        date: 'December 2025',
        location: 'Sahyadri College of Engineering & Management',
        achievement: 'Top 10 Finalists',
        description: 'Built an AI-Powered Carbon Compliance & ESG Reporting Automation solution for EG A/S. Collaborated with teammates Sujal G S, Lakshminarayanan P S, and Ayush Hegde to simplify ESG reporting and carbon compliance management. Gained insights from EG A/S CTO Allan Bech and CEO Anand Fernandes.',
        icon: Trophy,
        color: 'from-green-500/20 to-emerald-500/20',
        image: devhackImage,
        team: ['Sujal G S', 'Lakshminarayanan P S', 'Ayush Hegde']
    },
    {
        id: 2,
        title: 'HackFest 2025',
        type: 'National Level Hackathon',
        role: 'First-Year Participant',
        date: 'November 2025',
        location: 'NMAM Institute of Technology (Finite Loop Club)',
        achievement: 'Top 60 Finalists (out of 600+ teams)',
        description: 'My first hackathon experience! A 36-hour marathon of learning and building. Selected in the Top 60 among 600+ teams as first-year students. Competed in the Fintech track, gaining new perspectives on innovation and teamwork.',
        icon: Trophy,
        color: 'from-yellow-500/20 to-orange-500/20',
        image: hackfestImage,
        team: ['Sakshat Salian', 'Ayush Hegde']
    },
    {
        id: 3,
        title: 'Nexovate 2025',
        type: 'National Level Hackathon',
        role: 'Team Member',
        date: 'August 2025',
        location: 'Presidency University, Bangalore',
        achievement: 'Top 25 Finalists (out of 100+ teams)',
        description: 'Participated in the Nexovate\'25 National Level Hackathon. Secured a spot in the Top 25 teams among 100+ competing teams and 600+ registrations. Competed in the Fortify (Cybersecurity) track, brainstorming innovative solutions in a dynamic environment.',
        icon: Trophy,
        color: 'from-blue-500/20 to-cyan-500/20',
        image: nexovateImage,
        team: ['Ayush Hegde', 'Sakshat Salian', 'Sushena']
    },
    {
        id: 4,
        title: 'Nitte Beacons 2025',
        type: 'Literary & Quiz Competition',
        role: 'Institutional Representative',
        date: '2025',
        location: 'Nitte University',
        achievement: 'Debate & Quiz Participant',
        description: 'Represented NMAMIT in inter-college Debate and Quiz competitions, showcasing analytical and communication skills.',
        icon: Users,
        color: 'from-blue-500/20 to-purple-500/20'
    },
    {
        id: 5,
        title: 'NITK Incident 2025',
        type: 'Business Quiz',
        role: 'Competitor',
        date: '2025',
        location: 'NIT Karnataka, Surathkal',
        achievement: 'Top 5 Finish',
        description: 'Competed in the prestigious Business Quiz at NITK\'s annual technical fest, securing a Top 5 position among participating teams.',
        icon: Trophy,
        color: 'from-emerald-500/20 to-teal-500/20'
    }
];

const Events = () => {
    return (
        <section id="events" className="py-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-4">Events & Competitions</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Hackathons, competitions, and events where I've participated and achieved recognition.
                </p>
            </motion.div>

            <div className="space-y-8">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative"
                    >
                        <div className={`glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-500`}>
                            {/* Background Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`}></div>

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                {/* Icon */}
                                <div className="relative">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500">
                                        <event.icon size={40} className="text-electric-blue" />
                                    </div>
                                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-3">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all">
                                                {event.title}
                                            </h3>
                                            <p className="text-electric-blue text-lg font-medium">{event.type}</p>
                                        </div>
                                        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-gray-300 whitespace-nowrap">
                                            {event.date}
                                        </span>
                                    </div>

                                    <div className="text-base text-gray-300 font-medium">
                                        {event.role}
                                    </div>

                                    <p className="text-gray-400 leading-relaxed">
                                        {event.description}
                                    </p>

                                    {/* Event Image */}
                                    {event.image && (
                                        <div className="mt-4 rounded-xl overflow-hidden border border-white/10 max-w-sm">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}

                                    {/* Team Members */}
                                    {event.team && (
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                                                <Users size={14} className="text-electric-blue" />
                                                Team:
                                            </span>
                                            {event.team.map((member, i) => (
                                                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                                                    {member}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-3 pt-2">
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white shadow-lg shadow-green-500/10">
                                            <Trophy size={16} className="text-yellow-400" />
                                            {event.achievement}
                                        </span>
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white shadow-lg shadow-blue-500/10">
                                            <MapPin size={16} className="text-cyber-teal" />
                                            {event.location}
                                        </span>
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
                        <div className="text-4xl font-bold text-electric-blue">Hackathons</div>,
                        <div className="text-4xl font-bold text-cyber-teal">Competitions</div>,
                        <div className="text-4xl font-bold text-white">Innovation</div>,
                        <div className="text-4xl font-bold text-electric-blue">Achievement</div>,
                        <div className="text-4xl font-bold text-cyber-teal">Recognition</div>,
                        <div className="text-4xl font-bold text-white">Excellence</div>
                    ]}
                    speed={24}
                    fade={true}
                    scaleOnHover={true}
                    logoHeight={40}
                />
            </motion.div>
        </section>
    );
};

export default Events;
