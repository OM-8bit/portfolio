
import { useState, useEffect } from 'react';
import TypingAnimation from './TypingAnimation';
import { Download, ArrowDown } from 'lucide-react';

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
    "I work with Python and Java mainly",
    "But I also like to work in DevOps",
    "I turn grass into code"
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
      {/* Futuristic gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(25_65%_55%_/_0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(145_25%_40%_/_0.08),transparent_50%)]"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border border-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-16 w-20 h-20 border border-accent/20 rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-24 w-16 h-16 border border-primary/30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-48 right-32 w-12 h-12 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-center justify-center text-center">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light tracking-[0.2em] mb-6 uppercase">
            Hello, I'm
          </h2>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 text-foreground tracking-tight">
            Om Barot
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-foreground h-16 flex items-center justify-center">
            <TypingAnimation texts={typingTexts} speed={150} className="text-primary" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            A passionate software developer specializing in Python and Java,
            building scalable and high-performance applications with a touch of luxury.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'} flex flex-col sm:flex-row gap-6 justify-center`}>
          <button 
            onClick={scrollToProjects}
            className="futuristic-button group"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          <button 
            onClick={downloadResume}
            className="border-2 border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm
            px-8 py-3 rounded-full transition-all duration-500 hover:border-primary hover:shadow-[0_0_20px_rgba(var(--primary)_/_0.3)] 
            flex items-center gap-3 mx-auto sm:mx-0 font-light tracking-wide"
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className={`w-10 h-16 rounded-full border-2 border-primary/40 flex justify-center items-start p-2
        transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
