import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 mt-20">
            <p>© {new Date().getFullYear()} Sonal Hegde. Built with React & Tailwind CSS.</p>
        </footer>
    );
};

export default Footer;
