
import { useState, useEffect } from 'react';
import TypingAnimation from './TypingAnimation';
import { Download } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typingTexts = [
    "I'm a Developer",
    "I Build SaaS Apps", 
    "I Work with AI & Cloud"
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Om_Barot_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Modern gradient background */}
      <div className="absolute w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-portfolio-accent/20"></div>
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_right,hsl(262_83%_58%_/_0.1),transparent_70%)]"></div>
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_bottom_left,hsl(282_85%_60%_/_0.1),transparent_70%)]"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-portfolio-accent/10 rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-center justify-center text-center">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-xl md:text-2xl text-foreground font-medium mb-3">Hello, I'm</h2>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            <span className="text-gradient">Om Barot</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-foreground h-16 flex items-center justify-center">
            <TypingAnimation texts={typingTexts} speed={150} className="text-primary" />
          </div>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
            A passionate software developer specializing in Python and Java,
            building scalable and high-performance applications.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'} flex flex-col sm:flex-row gap-4 justify-center`}>
          <button 
            onClick={scrollToProjects}
            className="modern-gradient text-white px-8 py-3 rounded-full 
            shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-pulse-glow"
          >
            View My Work
          </button>
          <button 
            onClick={downloadResume}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground 
            px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 mx-auto sm:mx-0"
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className={`w-8 h-12 rounded-full border-2 border-primary flex justify-center p-1 
        transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-1 h-3 bg-primary rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
