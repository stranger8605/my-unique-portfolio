import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const stats = [
    { value: "5+", label: "Projects" },
    { value: "2+", label: "Years of Practice" },
    { value: "8+", label: "Tools & Tech" },
    { value: "2", label: "Internships" },
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient glow-text">
              VIGNESH T
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
              Aspiring Software Engineer & Malware Analyst
            </h2>
            <h3 className="text-lg md:text-xl text-primary mb-6">
              Cybersecurity • Malware Analysis • Web Development
            </h3>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Aspiring Malware Analyst seeking an entry-level role to apply static and dynamic malware analysis skills, Windows internals knowledge, and programming expertise to identify and mitigate cyber threats.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <a href="./VIGNESH_Resume.pdf" download>
              <Button size="lg" className="glow text-lg px-8 py-6 rounded-xl">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <div className="glass rounded-2xl p-6 inline-flex flex-wrap justify-center gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
