import { MapPin, Phone, Mail, Github } from "lucide-react";

const About = () => {
  const contactInfo = [
    { icon: MapPin, text: "Bhavani, Erode, Tamil Nadu" },
    { icon: Phone, text: "+91 8015978929" },
    { icon: Mail, text: "vickyt8605@gmail.com" },
    { icon: Github, text: "vicky_t8605", link: "https://github.com/vicky_t8605" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a passionate technology enthusiast specializing in cybersecurity and software engineering. I focus on developing static and dynamic malware analysis capabilities, understanding Windows and Linux internals, and applying programming expertise to detect and counter security threats.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In addition, I build responsive web applications with React, Tailwind CSS, and TypeScript, incorporating secure development standards. Currently pursuing my B.Tech in Information Technology at Knowledge Institute of Technology.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-foreground">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
