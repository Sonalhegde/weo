import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Events from './components/Events';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [bgTheme, setBgTheme] = React.useState('default');

  return (
    <div className="min-h-screen bg-midnight text-white overflow-x-hidden relative selection:bg-electric-blue selection:text-white font-sans transition-colors duration-700" data-theme={bgTheme}>
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {bgTheme === 'default' && (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-electric-blue/20 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyber-teal/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
          </>
        )}
        {bgTheme === 'nebula' && (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-midnight to-midnight"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px] animate-pulse-slow"></div>
          </>
        )}
        {bgTheme === 'silver' && (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gray-400/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-slate-300/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
          </>
        )}
        {bgTheme === 'minecraft' && (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-green-800/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
          </>
        )}
      </div>

      <div className="relative z-10">
        <Navbar theme={bgTheme} />

        {/* Theme Switcher */}
        <div className="fixed bottom-8 right-8 z-50 flex gap-2 glass-panel p-2 rounded-full">
          <button
            onClick={() => setBgTheme('default')}
            className={`w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 ${bgTheme === 'default' ? 'ring-2 ring-white' : 'opacity-50'}`}
            title="Oceanic"
          />
          <button
            onClick={() => setBgTheme('nebula')}
            className={`w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 ${bgTheme === 'nebula' ? 'ring-2 ring-white' : 'opacity-50'}`}
            title="Nebula"
          />
          <button
            onClick={() => setBgTheme('silver')}
            className={`w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-slate-500 ${bgTheme === 'silver' ? 'ring-2 ring-white' : 'opacity-50'}`}
            title="Premium Silver"
          />
          <button
            onClick={() => setBgTheme('minecraft')}
            className={`w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-yellow-900 ${bgTheme === 'minecraft' ? 'ring-2 ring-white' : 'opacity-50'}`}
            title="Minecraft"
          />
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-24 pt-24">
          <Hero theme={bgTheme} />
          <About />
          <Education />
          <Events />
          <Projects />
          <Experience />
          <Certifications />
          <Contact theme={bgTheme} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
