
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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
    <section id="about" className="section-container bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient 
            transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            About Me
          </h2>
          <div className={`h-1 w-20 bg-portfolio-blue mx-auto rounded-full
            transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 delay-400 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-portfolio-blue/10 p-3">
              <img 
                src="/lovable-uploads/35ebd811-ebfb-448b-b1e5-f3202caafdc5.png" 
                alt="Om Barot" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
          
          <div>
            <div className={`mb-6 transition-all duration-700 delay-600 
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-bold mb-4 text-portfolio-accent">Profile</h3>
              <p className="text-slate-700 leading-relaxed">
                Passionate Software Developer with expertise in Python and Java, specializing in
                backend development. Experienced in working with Supabase, PostgreSQL, and
                SQL, building efficient and scalable database solutions. Skilled in modern
                frameworks such as Flask, Django, FastAPI, and Streamlit, with a strong
                focus on developing high-performance web applications and APIs. Committed to
                writing clean, maintainable code and continuously learning new technologies.
              </p>
            </div>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-800 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-portfolio-accent">Education</h4>
                <ul className="space-y-3">
                  <li>
                    <p className="font-medium">S.S.C (G.S.E.B)</p>
                    <p className="text-sm text-slate-600">2020 - 98.85 pr</p>
                  </li>
                  <li>
                    <p className="font-medium">H.S.C (SCIENCE STREAM)</p>
                    <p className="text-sm text-slate-600">2022 - 58%</p>
                  </li>
                  <li>
                    <p className="font-medium">B.TECH (COMPUTER SCIENCE)</p>
                    <p className="text-sm text-slate-600">2022-2026</p>
                    <p className="text-sm text-slate-600">SPECIALIZATION: DATA SCIENCE</p>
                    <p className="text-sm text-slate-600">PASSED ALL SEMESTERS WITH ATLEAST 9 CGPA</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-portfolio-accent">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Phone:</span>
                    <span className="text-slate-600">9106237958</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Email:</span>
                    <a href="mailto:ombarot.dev@gmail.com" className="text-portfolio-blue hover:underline">
                      ombarot.dev@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">LinkedIn:</span>
                    <a href="https://www.linkedin.com/in/om-barot-232630338/" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                      om-barot-232630338
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">GitHub:</span>
                    <a href="https://github.com/OM-8bit" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                      OM-8bit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={`mt-6 transition-all duration-700 delay-1000 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="text-lg font-semibold mb-2 text-portfolio-accent">Hobbies</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Exploring new places</li>
                <li>Workout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
