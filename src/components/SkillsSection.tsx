import { useEffect, useRef, useState } from 'react';
import { Cpu } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  delay: number;
}

const skills: Skill[] = [
  { name: 'Python', level: 9, delay: 0 },
  { name: 'Java', level: 8, delay: 100 },
  { name: 'FastAPI', level: 9, delay: 200 },
  { name: 'Django', level: 8, delay: 300 },
  { name: 'Flask', level: 9, delay: 400 },
  { name: 'Docker', level: 7, delay: 500 },
  { name: 'CI/CD', level: 9, delay: 600 },
  { name: 'GitHub', level: 8.5, delay: 700 },
  { name: 'SupaBase', level: 9, delay: 800 },
  { name: 'Streamlit', level: 8, delay: 900 },
  { name: 'Power BI', level: 7, delay: 1000 }
];

const SkillBar = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => {
  return (
    <div className={`mb-8 transition-all duration-700 delay-${skill.delay} 
      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} group`}>
      <div className="flex justify-between mb-3">
        <h4 className="font-light text-foreground text-lg tracking-wide group-hover:text-primary transition-colors">
          {skill.name}
        </h4>
        <span className="text-sm text-primary font-light">{skill.level}/10</span>
      </div>
      <div className="relative w-full bg-muted/30 rounded-full h-2 overflow-hidden border border-border/30">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary h-full rounded-full
          shadow-[0_0_10px_rgba(var(--primary)_/_0.5)] transition-all duration-1000"
          style={{ 
            width: isVisible ? `${skill.level * 10}%` : '0%',
            transitionDelay: `${skill.delay}ms`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[slide-in-right_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
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
    <section id="skills" className="section-container relative" ref={sectionRef}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <Cpu className="text-primary w-8 h-8" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className={`section-heading transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Technical Expertise
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        <div className="max-w-4xl mx-auto luxury-card">
          <div className="grid grid-cols-1 gap-2">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
