import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50 bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className={`text-center md:text-left transition-all duration-700 delay-100 
            ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-light text-foreground mb-2 tracking-wide">Om Barot</h3>
            <p className="text-sm text-muted-foreground font-light tracking-wide">Software Developer & Digital Creator</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className={`w-12 h-12 bg-primary/10 hover:bg-primary/20 text-primary rounded-full 
            flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(var(--primary)_/_0.3)]
            ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className={`mt-8 pt-8 border-t border-border/30 text-center transition-all duration-700 delay-300 
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            &copy; {new Date().getFullYear()} Om Barot. Crafted with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
