import { Trophy, Shield, Medal, Users } from "lucide-react";

const Achievements = () => {
  const ctfAchievements = [
    {
      title: "Cryovault CTF",
      detail: "Placed 88th out of 200 teams in this national level cybersecurity competition.",
      icon: Trophy,
    },
    {
      title: "Hackerverse CTF Hackathon",
      detail: "Achieved a rank of 190 in the cybersecurity CTF hackathon.",
      icon: Medal,
    },
    {
      title: "GDG Capture The Flag 2026",
      detail: "Participated in the Google Developer Group CTF organized on campus KSRCE.",
      icon: Shield,
    },
  ];

  const activities = [
    {
      role: "College Symposium Volunteer",
      detail: "Coordinated paper presentations and event activities for the academic symposium.",
      icon: Users,
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Achievements & Activities
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* CTFs & Hackathons */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Cybersecurity Competitions & CTFs
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {ctfAchievements.map((ctf, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ctf.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{ctf.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ctf.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Work */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Volunteering & Leadership
            </h3>
            
            <div className="grid md:grid-cols-1 gap-6">
              {activities.map((act, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <act.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{act.role}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{act.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
