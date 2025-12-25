import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Calendar } from 'lucide-react';

const Contact = ({ theme }) => {
    const isMinecraft = theme === 'minecraft';
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '0a557275-9537-46a3-94aa-99784b0252ba',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Portfolio Contact from ${formData.name}`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
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
                    <div className="glass-panel p-6 flex items-center gap-4">
                        <div className="p-3 rounded-full bg-electric-blue/10 text-electric-blue">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <a href="mailto:sonalhhegde@gmail.com" className="text-white font-medium hover:text-electric-blue transition-colors">sonalhhegde@gmail.com</a>
                        </div>
                    </div>

                    <div className="glass-panel p-6 flex items-center gap-4">
                        <div className="p-3 rounded-full bg-electric-blue/10 text-electric-blue">
                            <Linkedin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">LinkedIn</p>
                            <a href="https://linkedin.com/in/sonalhegde" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-electric-blue transition-colors">linkedin.com/in/sonalhegde</a>
                        </div>
                    </div>

                    <div className="glass-panel p-6 flex items-center gap-4">
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
                    className="glass-panel p-8 space-y-4"
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
                            className={`w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors ${isMinecraft ? '' : 'rounded-xl'}`}
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
                            className={`w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors ${isMinecraft ? '' : 'rounded-xl'}`}
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
                            className={`w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors ${isMinecraft ? '' : 'rounded-xl'}`}
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`w-full font-bold py-3 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${isMinecraft ? 'minecraft-btn' : 'rounded-xl bg-electric-blue hover:bg-electric-blue-hover text-white'}`}
                    >
                        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                    </button>
                    {status === 'success' && (
                        <p className="text-green-400 text-sm mt-2 text-center">Thank you! Your message has been sent successfully.</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-400 text-sm mt-2 text-center">Oops! Something went wrong. Please try again.</p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
