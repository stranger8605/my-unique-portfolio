import { Code, Terminal, Shield, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Malware Analysis & Security",
      icon: Shield,
      skills: [
        { name: "Static Analysis", level: 85 },
        { name: "Dynamic Analysis", level: 80 },
        { name: "Malware Behavior", level: 85 },
        { name: "Cyber Threats", level: 90 },
      ],
    },
    {
      title: "Operating Systems & Internals",
      icon: Terminal,
      skills: [
        { name: "Windows Internals", level: 80 },
        { name: "Linux Fundamentals", level: 85 },
      ],
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: [
        { name: "Python Programming", level: 85 },
        { name: "C Programming", level: 80 },
        { name: "Java Programming", level: 70 },
        { name: "Code Debugging", level: 85 },
      ],
    },
    {
      title: "Data & Supporting Skills",
      icon: Database,
      skills: [
        { name: "SQL / MySQL", level: 80 },
        { name: "Data Analysis", level: 75 },
        { name: "Web Basics", level: 85 },
      ],
    },
  ];

  const tools = [
    "VS Code", "Kali Linux", "MySQL", "Anaconda", "Jupyter Notebook", 
    "Git", "MS Excel", "MS Office"
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Skills & Tools
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Skill Bars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="glass rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tool Icons */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="px-6 py-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 font-medium"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
