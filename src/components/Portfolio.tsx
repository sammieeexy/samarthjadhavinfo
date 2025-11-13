import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Content Projects Coming Soon",
      category: "Content Writing",
      description: "I'm building my first projects in content creation, blog writing, and strategic content development. Stay tuned for exciting updates!",
      tags: ["Coming Soon"]
    },
    {
      title: "Copywriting Portfolio",
      category: "Copywriting",
      description: "Working on compelling ad copy, email campaigns, and persuasive marketing materials. Projects will be showcased here soon!",
      tags: ["In Progress"]
    },
    {
      title: "Design Work",
      category: "Graphic Design",
      description: "Creating brand identities, visual designs, and creative graphics. My design portfolio is currently under development.",
      tags: ["Coming Soon"]
    },
    {
      title: "Web Development",
      category: "Web Development",
      description: "Building responsive websites and web applications with modern technologies. Projects launching soon!",
      tags: ["In Progress"]
    },
    {
      title: "Digital Marketing Campaigns",
      category: "Digital Marketing",
      description: "Developing social media strategies, SEO campaigns, and digital marketing initiatives. Watch this space!",
      tags: ["Coming Soon"]
    },
    {
      title: "Brand Strategy",
      category: "Content Management",
      description: "Crafting comprehensive content strategies and brand management frameworks. Portfolio pieces coming soon!",
      tags: ["In Progress"]
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
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
