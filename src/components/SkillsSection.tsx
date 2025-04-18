
import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  delay: number;
}

const skills: Skill[] = [
  { name: 'Python', level: 9, delay: 0 },
  { name: 'Java', level: 8, delay: 200 },
  { name: 'FastAPI', level: 9, delay: 400 },
  { name: 'Flask', level: 9, delay: 600 },
  { name: 'SupaBase', level: 9, delay: 800 },
  { name: 'Streamlit', level: 8, delay: 1000 },
  { name: 'Power BI', level: 7, delay: 1200 }
];

const SkillBar = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => {
  return (
    <div className={`mb-6 transition-all duration-700 delay-${skill.delay} 
      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
      <div className="flex justify-between mb-2">
        <h4 className="font-medium text-slate-700">{skill.name}</h4>
        <span className="text-sm text-portfolio-blue">{skill.level}/10</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-portfolio-blue h-2.5 rounded-full" 
          style={{ 
            width: isVisible ? `${skill.level * 10}%` : '0%',
            transition: `width 1.5s ease-out ${skill.delay / 1000}s`
          }}
        ></div>
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
    <section id="skills" className="section-container bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={`section-heading transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Skills
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
