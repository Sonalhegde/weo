import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Calendar } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:sonalhhegde@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section id="contact" className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-400 text-lg">Have a project in mind or want to discuss AI & IoT?</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
                        <div className="p-3 rounded-full bg-electric-blue/10 text-electric-blue">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <a href="mailto:sonalhhegde@gmail.com" className="text-white font-medium hover:text-electric-blue transition-colors">sonalhhegde@gmail.com</a>
                        </div>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
                        <div className="p-3 rounded-full bg-electric-blue/10 text-electric-blue">
                            <Linkedin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">LinkedIn</p>
                            <a href="https://linkedin.com/in/sonalhegde" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-electric-blue transition-colors">linkedin.com/in/sonalhegde</a>
                        </div>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
                        <div className="p-3 rounded-full bg-electric-blue/10 text-electric-blue">
                            <Calendar size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Book a Meet</p>
                            <a href="https://calendly.com/sonalhhegde/30min" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-electric-blue transition-colors">Schedule on Calendly</a>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-3xl space-y-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                        <textarea
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-electric-blue hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-all hover:scale-[1.02]">
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
