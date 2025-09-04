
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
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
    
    // Log form data to console
    console.log('Form submitted:', formState);
    
    // In a real application, you would send this data to a server using an API
    // For example:
    // fetch('https://your-backend-api.com/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formState)
    // })
    
    // Show sarcastic success message with toast
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
    }, 1000); // Simulate server delay
  };

  return (
    <section id="contact" className="section-container bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient 
            transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Let's Connect
          </h2>
          <div className={`h-1 w-20 bg-portfolio-blue mx-auto rounded-full
            transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <p className={`mt-4 text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-300 
            ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 delay-400 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-bold mb-6 text-portfolio-accent">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-blue/10 p-3 rounded-full mr-4">
                  <Phone className="text-portfolio-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">9106237958</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-blue/10 p-3 rounded-full mr-4">
                  <Mail className="text-portfolio-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:ombarot.dev@gmail.com" className="text-portfolio-blue hover:underline">
                    ombarot.dev@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-blue/10 p-3 rounded-full mr-4">
                  <Linkedin className="text-portfolio-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/om-barot-232630338/" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                    om-barot-232630338
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-blue/10 p-3 rounded-full mr-4">
                  <Github className="text-portfolio-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">GitHub</h4>
                  <a href="https://github.com/OM-8bit" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                    OM-8bit
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-600 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-xl font-bold mb-6 text-portfolio-accent">Send Message</h3>
            
            {formSubmitted ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 text-center">
                <p className="font-medium">Your message has been sent... to the void!</p>
                <p className="text-sm mt-1">I'll get back to you when I finish watching every cat video on the internet.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-portfolio-blue 
                    focus:border-portfolio-blue outline-none transition-all"
                    placeholder="Your name (I promise I'll remember it... maybe)"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-portfolio-blue 
                    focus:border-portfolio-blue outline-none transition-all"
                    placeholder="Your email (so I can spam you with newsletter signups)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-portfolio-blue 
                    focus:border-portfolio-blue outline-none transition-all"
                    placeholder="Your message (which I'll definitely read right away and not after three months)"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-portfolio-darkBlue to-portfolio-blue text-white py-2 px-6 
                  rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {isSubmitting ? 'Pretending to Send...' : 'Send Message (to the Abyss)'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
