import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Content Writing",
      category: "Content Writing",
      description: "Crafting engaging articles, blogs, website content, and SEO-optimized writing that connects with audiences and drives results.",
      tags: []
    },
    {
      title: "Content Management",
      category: "Content Management",
      description: "Developing strategic content plans, managing editorial calendars, and organizing digital content workflows for maximum impact.",
      tags: []
    },
    {
      title: "Graphic Design",
      category: "Graphic Design",
      description: "Creating stunning visual designs, brand identities, logos, and creative graphics using Adobe Photoshop, Illustrator, and Canva.",
      tags: []
    },
    {
      title: "Video Editing",
      category: "Video Editing",
      description: "Producing professional video content with seamless editing, transitions, effects, and post-production for various platforms.",
      tags: []
    },
    {
      title: "Frontend Development",
      category: "Frontend Development",
      description: "Building responsive, modern websites and web applications using HTML, CSS, JavaScript, and React frameworks.",
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
