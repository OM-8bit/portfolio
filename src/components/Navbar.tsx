
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'venture', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-portfolio-accent">
            Om Barot
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><button onClick={() => scrollToSection('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</button></li>
            <li><button onClick={() => scrollToSection('venture')} className={`nav-link ${activeSection === 'venture' ? 'active' : ''}`}>My Venture</button></li>
            <li><button onClick={() => scrollToSection('skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</button></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden glass mt-3 py-4 px-6 animate-fade-in">
          <ul className="flex flex-col space-y-4">
            <li><button onClick={() => scrollToSection('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</button></li>
            <li><button onClick={() => scrollToSection('venture')} className={`nav-link ${activeSection === 'venture' ? 'active' : ''}`}>My Venture</button></li>
            <li><button onClick={() => scrollToSection('skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</button></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
