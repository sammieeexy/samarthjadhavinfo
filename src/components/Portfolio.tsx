import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Content Projects",
      category: "Content Writing",
      description: "Building engaging content creation projects, blog writing, and strategic content development initiatives.",
      tags: []
    },
    {
      title: "Copywriting Portfolio",
      category: "Copywriting",
      description: "Working on compelling ad copy, email campaigns, and persuasive marketing materials for various brands.",
      tags: []
    },
    {
      title: "Design Work",
      category: "Graphic Design",
      description: "Creating brand identities, visual designs, and creative graphics for diverse clientele.",
      tags: []
    },
    {
      title: "Web Development",
      category: "Web Development",
      description: "Building responsive websites and web applications with modern technologies and frameworks.",
      tags: []
    },
    {
      title: "Digital Marketing Campaigns",
      category: "Digital Marketing",
      description: "Developing social media strategies, SEO campaigns, and comprehensive digital marketing initiatives.",
      tags: []
    },
    {
      title: "Brand Strategy",
      category: "Content Management",
      description: "Crafting comprehensive content strategies and brand management frameworks for growing businesses.",
      tags: []
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Portfolio
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Featured projects showcasing creativity and results
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="mb-4">
                <p className="text-sm text-accent font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
