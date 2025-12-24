import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Cpu, Layers, Terminal } from 'lucide-react';
import LogoLoop from './LogoLoop';

const skills = [
    {
        category: 'Frontend Development',
        icon: <Code size={24} />,
        items: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
        category: 'Backend Development',
        icon: <Server size={24} />,
        items: ['Node.js', 'Python', 'Java', 'C++']
    },
    {
        category: 'Cloud & IoT',
        icon: <Cloud size={24} />,
        items: ['AWS', 'ESP8266/32', 'NVIDIA Jetson', 'IoT Architecture']
    },
    {
        category: 'AI & Tools',
        icon: <Cpu size={24} />,
        items: ['Hugging Face', 'N8N', 'Matlab', 'Adobe Photoshop']
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Bio Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-5 space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
                    <div className="glass-panel p-8 rounded-3xl space-y-6 text-gray-300 leading-relaxed relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl -z-10"></div>
                        <p className="text-lg">
                            I am an <span className="text-white font-semibold">Electronics and Communication Engineering student</span> at NMAMIT, bridging the gap between hardware and intelligent software.
                        </p>
                        <p>
                            My passion lies in building systems that perceive and act. From embedded architectures to advanced AI deployments, I engineer solutions that are both technically robust and socially impactful.
                        </p>
                        <p>
                            Whether it's securing hackathon wins with anti-phishing AI or automating complex workflows, I bring a rigorous, problem-solving mindset to every project.
                        </p>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-7"
                >
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-12 h-1 bg-gradient-to-r from-electric-blue to-cyber-teal rounded-full"></span>
                        Technical Arsenal
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-electric-blue/30 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-white/5 text-electric-blue group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <h4 className="font-bold text-lg text-white">{skill.category}</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item) => (
                                        <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-400 border border-white/5 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
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
                        <div className="text-4xl font-bold text-electric-blue">React</div>,
                        <div className="text-4xl font-bold text-cyber-teal">Node.js</div>,
                        <div className="text-4xl font-bold text-white">Python</div>,
                        <div className="text-4xl font-bold text-electric-blue">AWS</div>,
                        <div className="text-4xl font-bold text-cyber-teal">IoT</div>,
                        <div className="text-4xl font-bold text-white">AI/ML</div>,
                        <div className="text-4xl font-bold text-electric-blue">TailwindCSS</div>,
                        <div className="text-4xl font-bold text-cyber-teal">JavaScript</div>
                    ]}
                    speed={25}
                    fade={true}
                    scaleOnHover={true}
                    logoHeight={40}
                />
            </motion.div>
        </section>
    );
};

export default About;
