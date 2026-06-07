import { ExternalLink, Cpu, Globe, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Recycle Cloth",
      description: "Built a sustainable e-commerce platform for donating and reusing clothes to reduce textile waste. Designed an interactive UI and structured product management features for smooth user engagement.",
      icon: Globe,
      tags: ["HTML", "CSS", "JavaScript", "Responsive", "Sustainability"],
    },
    {
      title: "Ask PDF",
      description: "Developed a Retrieval-Augmented Generation (RAG) system combining document retrieval, offline use, and AI generation for accurate responses. Efficiently processes unstructured data using embeddings, vector search, and language models.",
      icon: FileText,
      tags: ["Python", "RAG", "Vector Search", "Embeddings", "LLMs"],
    },
    {
      title: "Food Feeder System",
      description: "Developed a hardware system integrating basic electronics with programming to automate food dispensing functionality.",
      icon: Cpu,
      tags: ["Hardware", "IoT", "C/C++", "Electronics"],
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in web development, hardware integration, and problem-solving.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass rounded-3xl p-6 group hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <project.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
