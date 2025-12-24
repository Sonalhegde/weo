import React from 'react';
import { motion } from 'framer-motion';
import ShapeBlur from './ShapeBlur';
import profileEffect from '../assets/profile_effect.png';

const ImageShowcase = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Image with ShapeBlur Effect */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[500px] w-full flex items-center justify-center"
                >
                    {/* ShapeBlur Effect as Background/Border */}
                    <div className="absolute inset-0 z-0">
                        <ShapeBlur
                            variation={0}
                            pixelRatioProp={window.devicePixelRatio}
                            shapeSize={1.2}
                            roundness={0.4}
                            borderSize={0.05}
                            circleSize={0.3}
                            circleEdge={0.5}
                        />
                    </div>

                    {/* Image */}
                    <div className="relative z-10 w-[80%] h-[80%] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                        <img
                            src={profileEffect}
                            alt="Visual Effect"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
                    </div>
                </motion.div>

                {/* Right Side: Content (Optional, or just empty if user only wanted image) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Visual Innovation
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Exploring the boundaries of creative coding and interactive design.
                        Merging technical precision with artistic expression to create immersive digital experiences.
                    </p>
                    <div className="flex gap-4">
                        <div className="h-1 w-20 bg-electric-blue rounded-full"></div>
                        <div className="h-1 w-10 bg-cyber-teal rounded-full"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImageShowcase;
