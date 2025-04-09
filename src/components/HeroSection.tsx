
import { useState, useEffect } from 'react';

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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(122,156,198,0.1),transparent_70%)]"></div>
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(122,156,198,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-center justify-center text-center">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-xl md:text-2xl text-portfolio-blue font-medium mb-3">Hello, I'm</h2>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
            Om Barot
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10">
            A passionate software developer specializing in Python and Java,
            building scalable and high-performance applications.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-portfolio-darkBlue to-portfolio-blue text-white px-8 py-3 rounded-full 
            shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            View My Work
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className={`w-8 h-12 rounded-full border-2 border-portfolio-blue flex justify-center p-1 
        transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-1 h-3 bg-portfolio-blue rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
