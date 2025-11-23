import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const getSarcasticResponse = (name: string) => {
    const responses = [
      `Oh great, another message from ${name}. I'll add it to my collection of "things I'll definitely read right away."`,
      `Thank you, ${name}! Your message is now safely tucked away where I might find it... eventually.`,
      `Message received, ${name}! I'll get back to you... when the stars align perfectly.`,
      `Wow, ${name}! Your message has been received with all the enthusiasm I can muster at this hour.`,
      `Congratulations ${name}! Your message has joined the elite club of "emails I might respond to this century."`,
      `Thanks ${name}! Your message is now in the hands of my assistant's assistant's intern.`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Form submitted:', formState);
    
    setTimeout(() => {
      toast({
        title: "Message Sent... Supposedly!",
        description: getSarcasticResponse(formState.name),
        duration: 5000,
      });
      
      setFormSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1000);
  };

  const contactMethods = [
    { icon: Phone, label: 'Phone', value: '9106237958', href: 'tel:9106237958' },
    { icon: Mail, label: 'Email', value: 'ombarot.dev@gmail.com', href: 'mailto:ombarot.dev@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'om-barot-232630338', href: 'https://www.linkedin.com/in/om-barot-232630338/' },
    { icon: Github, label: 'GitHub', value: 'OM-8bit', href: 'https://github.com/OM-8bit' }
  ];

  return (
    <section id="contact" className="section-container relative" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className={`section-heading transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Let's Connect
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <p className={`section-description transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Feel free to reach out for collaborations, opportunities, or just a friendly conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className={`transition-all duration-700 delay-400 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="luxury-card h-full">
              <h3 className="text-2xl font-light mb-8 text-foreground tracking-wide">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center
                    group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110">
                      <method.icon className="text-primary w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-light text-muted-foreground mb-1">{method.label}</h4>
                      {method.href.startsWith('http') ? (
                        <a 
                          href={method.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors font-light"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <a 
                          href={method.href}
                          className="text-foreground hover:text-primary transition-colors font-light"
                        >
                          {method.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-600 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="luxury-card h-full">
              <h3 className="text-2xl font-light mb-8 text-foreground tracking-wide">Send a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-accent/10 text-accent p-6 rounded-lg border border-accent/20 text-center">
                  <p className="font-light text-lg">Your message has been sent... to the void!</p>
                  <p className="text-sm mt-2 font-light">I'll get back to you when I finish watching every cat video on the internet.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-muted-foreground mb-2 tracking-wide">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg 
                      focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all
                      font-light placeholder:text-muted-foreground/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-muted-foreground mb-2 tracking-wide">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg 
                      focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all
                      font-light placeholder:text-muted-foreground/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-light text-muted-foreground mb-2 tracking-wide">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg 
                      focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none
                      font-light placeholder:text-muted-foreground/50"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full futuristic-button flex items-center justify-center gap-3"
                  >
                    <Send size={18} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
