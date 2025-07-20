import { Code2, Database, Brain, Palette, Server, Smartphone } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      color: "power-stone",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "space-stone",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
        { name: "MongoDB", level: 60 },
        { name: "REST APIs", level: 70 }
      ]
    },
    {
      title: "AI & Emerging Tech",
      icon: Brain,
      color: "reality-stone",
      skills: [
        { name: "Gemini API", level: 65 },
        { name: "Groq", level: 60 },
        { name: "Machine Learning", level: 55 },
        { name: "Data Structures", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-orbitron font-black text-4xl md:text-5xl mb-4 gradient-text">
            SKILL MATRIX
          </h2>
          <p className="text-muted-foreground font-exo text-lg max-w-2xl mx-auto">
            Every Avenger has unique abilities. Here's my technological arsenal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card glow-hover animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-${category.color}/20 rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="font-orbitron font-bold text-xl">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-exo font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-orbitron">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/60 rounded-full transition-all duration-1000 ease-out glow-${category.color}`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {[
            { icon: Code2, name: "Clean Code", color: "primary" },
            { icon: Database, name: "Database Design", color: "secondary" },
            { icon: Smartphone, name: "Responsive Design", color: "accent" },
            { icon: Brain, name: "Problem Solving", color: "power-stone" }
          ].map((skill) => (
            <div key={skill.name} className="glass-card text-center glow-hover">
              <skill.icon className={`w-8 h-8 text-${skill.color} mx-auto mb-3`} />
              <h4 className="font-orbitron font-bold text-sm">{skill.name}</h4>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="font-orbitron font-bold text-xl text-primary mb-4">
              Continuous Learning Protocol
            </h3>
            <p className="text-muted-foreground font-exo text-lg">
              "With great power comes great responsibility" - and the responsibility to keep learning. 
              Currently expanding knowledge in advanced React patterns, microservices architecture, 
              and cutting-edge AI integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;