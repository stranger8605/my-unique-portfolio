import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationList = [
    {
      institution: "Knowledge Institute of Technology",
      degree: "Bachelor of Technology",
      major: "Information Technology",
      period: "2023 - 2027",
      scoreLabel: "Current CGPA",
      score: "7.8 / 10.0"
    },
    {
      institution: "Higher Secondary (12th Standard)",
      degree: "Higher Secondary Schooling",
      major: "Science & Mathematics",
      period: "Completed 2023",
      scoreLabel: "Percentage",
      score: "85% Secured Marks"
    }
  ];

  return (
    <section id="education" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationList.map((edu, index) => (
            <div 
              key={index}
              className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
              
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex w-14 h-14 rounded-2xl bg-primary/20 items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-primary mb-4 font-medium">
                      {edu.degree}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                        <Award className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Major</div>
                          <div className="font-semibold text-sm">{edu.major}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Period</div>
                          <div className="font-semibold text-sm">{edu.period}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">{edu.scoreLabel}</div>
                          <div className="font-semibold text-sm">{edu.score}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
