import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BookOpen, Building2 } from 'lucide-react';
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

  const services = [
    'Web Design & Development',
    'Digital Marketing Strategies',
    'Brand Identity Development',
    'Social Media Management'
  ];

  return (
    <section id="venture" className="section-container bg-muted/20 relative" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Building2 className="text-primary w-8 h-8" />
          </div>
          <h2 className={`section-heading transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            My Venture
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className={`luxury-card transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-xl">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-20 h-20 bg-background/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 overflow-hidden border border-border/30">
                      <img 
                        src="/lovable-uploads/84a79e31-dba8-4e43-bd53-b3a5ef40a210.png" 
                        alt="MetaMotives Logo"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="text-3xl font-light mb-3 text-foreground tracking-wide">MetaMotives</h3>
                    <p className="text-muted-foreground mb-6 font-light tracking-wide">Digital Presence Agency</p>
                  </div>
                  
                  <div className="border-t border-border/30 pt-6">
                    <p className="text-muted-foreground mb-2 font-light text-sm">Founder & CEO</p>
                    <p className="font-light text-xl text-foreground">Om Barot</p>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h4 className="text-xl font-light mb-4 text-foreground tracking-wide">About MetaMotives</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    MetaMotives is a digital presence agency focused on helping businesses and individuals establish a powerful online footprint. 
                    We specialize in creating compelling digital identities through strategic web development, social media management, 
                    and innovative digital marketing solutions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-light mb-4 text-foreground tracking-wide">Our Services</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-muted-foreground font-light group-hover:text-foreground transition-colors">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    className="futuristic-button flex items-center justify-center gap-2"
                    onClick={() => window.open("https://metamotives.world", "_blank")}
                  >
                    Visit MetaMotives
                    <ArrowUpRight size={16} />
                  </Button>
                  
                  <Link to="/blog" className="flex-1 sm:flex-initial">
                    <Button 
                      variant="outline"
                      className="w-full border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm
                      transition-all duration-500 flex items-center justify-center gap-2 font-light tracking-wide"
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
