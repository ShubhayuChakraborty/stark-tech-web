import { Code2, Database, Brain, Palette, Server, Smartphone } from "lucide-react";

// Tech stack icons as SVG components
const TechIcons = {
  HTML5: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  CSS3: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.351l5.568-1.59L18.59 4.413z"/>
    </svg>
  ),
  JavaScript: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  ),
  React: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.099 2.21-.099zm-3.635.654c-.24.06-.47.123-.694.19-.017.068-.034.137-.05.206-.034.14-.065.283-.094.43.09-.284.191-.558.302-.827.168-.325.346-.644.536-.939zm6.97.19c.28.143.587.344.88.564.24.178.457.370.664.576-.04.06-.08.119-.12.179-.092.15-.193.304-.297.457.04-.28.09-.557.128-.835.037-.265.07-.532.095-.803zm-5.254.662c.25-.005.506-.007.762-.007.257 0 .513.002.762.007.34.09.675.206 1.005.34.32.13.636.27.946.42-.306.477-.61.96-.912 1.446-.302.487-.6.976-.894 1.467-.296-.49-.596-.98-.894-1.466-.298-.486-.606-.969-.912-1.446.31-.15.626-.29.946-.42.33-.134.665-.25 1.005-.34z"/>
    </svg>
  ),
  NodeJS: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
    </svg>
  ),
  MongoDB: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.017.51-9.027.417-.297 3.956-2.7 4.292-5.418z"/>
    </svg>
  ),
  Python: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
    </svg>
  )
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      color: "power-stone",
      skills: [
        { name: "HTML5", level: 90, icon: "HTML5" },
        { name: "CSS3", level: 85, icon: "CSS3" },
        { name: "JavaScript", level: 80, icon: "JavaScript" },
        { name: "React", level: 75, icon: "React" },
        { name: "Tailwind CSS", level: 85, icon: null }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "space-stone",
      skills: [
        { name: "Node.js", level: 70, icon: "NodeJS" },
        { name: "Express.js", level: 65, icon: null },
        { name: "MongoDB", level: 60, icon: "MongoDB" },
        { name: "REST APIs", level: 70, icon: null }
      ]
    },
    {
      title: "AI & Emerging Tech",
      icon: Brain,
      color: "reality-stone",
      skills: [
        { name: "Python", level: 70, icon: "Python" },
        { name: "Gemini API", level: 65, icon: null },
        { name: "Groq", level: 60, icon: null },
        { name: "Machine Learning", level: 55, icon: null },
        { name: "Data Structures", level: 75, icon: null }
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

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {skill.icon && TechIcons[skill.icon] ? (
                          <div className={`text-${category.color} transition-transform group-hover:scale-110`}>
                            {TechIcons[skill.icon]()}
                          </div>
                        ) : (
                          <div className={`w-8 h-8 bg-${category.color}/20 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110`}>
                            <Code2 className={`w-5 h-5 text-${category.color}`} />
                          </div>
                        )}
                        <span className="font-exo font-medium text-foreground">{skill.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/60 rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                            }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground font-orbitron font-bold min-w-[3rem] text-right">{skill.level}%</span>
                      </div>
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