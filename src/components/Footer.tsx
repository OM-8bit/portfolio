
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-portfolio-accent py-10 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={`mb-6 md:mb-0 transition-all duration-700 delay-100 
            ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold">Om Barot</h3>
            <p className="text-sm mt-1 text-gray-200">Software Developer</p>
          </div>
          
          <div className={`transition-all duration-700 delay-300 
            ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={scrollToTop}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className={`mt-8 pt-8 border-t border-white/20 text-sm text-center text-gray-200 transition-all duration-700 delay-500 
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>&copy; {new Date().getFullYear()} Om Barot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
