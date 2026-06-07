import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Infotact Solution",
      role: "Python Developer Intern",
      period: "July - October 2025",
      description: "Completed Python development work, gaining hands-on experience building and maintaining efficient applications. Worked with core Python concepts, data handling, and problem-solving to support real project requirements. Improved understanding of clean coding and best development practices.",
    },
    {
      company: "Codsoft",
      role: "Web Development Intern",
      period: "May - June 2024",
      description: "Built responsive and visually appealing websites using HTML, CSS, and JavaScript. Gained hands-on experience in creating clean UI layouts and improving user experience through modern frontend practices. Strengthened programming skills in C language, including problem-solving and algorithms.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-xl text-primary font-medium">
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
