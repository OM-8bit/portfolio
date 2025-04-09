
import { useEffect, useRef, useState } from 'react';
import { Globe, ArrowUpRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const VentureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="venture" className="section-container bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={`section-heading transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            My Venture
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 bg-portfolio-accent p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                      <img 
                        src="/lovable-uploads/84a79e31-dba8-4e43-bd53-b3a5ef40a210.png" 
                        alt="MetaMotives Logo"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">MetaMotives</h3>
                    <p className="text-white/90 mb-6">Digital Presence Agency</p>
                  </div>
                  
                  <div>
                    <p className="text-white/80 mb-4">Founder & CEO</p>
                    <p className="font-bold">Om Barot</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/5 p-8">
                <h4 className="text-xl font-semibold mb-4 text-portfolio-accent">About MetaMotives</h4>
                <p className="text-gray-700 mb-6">
                  MetaMotives is a digital presence agency focused on helping businesses and individuals establish a powerful online footprint. 
                  We specialize in creating compelling digital identities through strategic web development, social media management, 
                  and innovative digital marketing solutions.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-portfolio-accent">Our Services</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-portfolio-accent mr-3"></span>
                    <span>Web Design & Development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-portfolio-accent mr-3"></span>
                    <span>Digital Marketing Strategies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-portfolio-accent mr-3"></span>
                    <span>Brand Identity Development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-portfolio-accent mr-3"></span>
                    <span>Social Media Management</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-portfolio-accent hover:bg-portfolio-accent/80 transition-colors duration-300 flex items-center gap-2"
                    onClick={() => window.open("https://metamotives.world", "_blank")}
                  >
                    Visit MetaMotives
                    <ArrowUpRight size={16} />
                  </Button>
                  
                  <Link to="/blog">
                    <Button 
                      variant="outline"
                      className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 transition-colors duration-300 flex items-center gap-2"
                    >
                      Read Our Blog
                      <BookOpen size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentureSection;
