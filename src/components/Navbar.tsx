
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Only update active section on homepage
      if (isHomePage) {
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    } else {
      // If not on homepage, navigate to homepage first, then scroll
      window.location.href = `/#${id}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-portfolio-accent">
            Om Barot
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li><button onClick={() => scrollToSection('home')} className={`nav-link ${activeSection === 'home' && isHomePage ? 'active' : ''}`}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className={`nav-link ${activeSection === 'about' && isHomePage ? 'active' : ''}`}>About</button></li>
            <li><button onClick={() => scrollToSection('venture')} className={`nav-link ${activeSection === 'venture' && isHomePage ? 'active' : ''}`}>My Venture</button></li>
            <li><button onClick={() => scrollToSection('skills')} className={`nav-link ${activeSection === 'skills' && isHomePage ? 'active' : ''}`}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' && isHomePage ? 'active' : ''}`}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' && isHomePage ? 'active' : ''}`}>Contact</button></li>
            <li><Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link></li>
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
            <li><button onClick={() => scrollToSection('home')} className={`nav-link ${activeSection === 'home' && isHomePage ? 'active' : ''}`}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className={`nav-link ${activeSection === 'about' && isHomePage ? 'active' : ''}`}>About</button></li>
            <li><button onClick={() => scrollToSection('venture')} className={`nav-link ${activeSection === 'venture' && isHomePage ? 'active' : ''}`}>My Venture</button></li>
            <li><button onClick={() => scrollToSection('skills')} className={`nav-link ${activeSection === 'skills' && isHomePage ? 'active' : ''}`}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' && isHomePage ? 'active' : ''}`}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' && isHomePage ? 'active' : ''}`}>Contact</button></li>
            <li><Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
