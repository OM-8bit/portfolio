
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // In a real application, you would send this data to a server
    setFormSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-container bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient 
            transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Let's Connect
          </h2>
          <div className={`h-1 w-20 bg-portfolio-blue mx-auto rounded-full
            transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <p className={`mt-4 text-slate-600 max-w-xl mx-auto transition-all duration-700 delay-300 
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
                  <p className="text-slate-600">9106237958</p>
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
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">I will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-blue 
                    focus:border-portfolio-blue outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-blue 
                    focus:border-portfolio-blue outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-blue 
                    focus:border-portfolio-blue outline-none transition-all"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-portfolio-darkBlue to-portfolio-blue text-white py-2 px-6 
                  rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
