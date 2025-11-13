import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Brand Content Strategy",
      category: "Content Writing",
      description: "Developed comprehensive content strategy for a tech startup, increasing organic traffic by 150%.",
      tags: ["SEO", "Blog", "Strategy"]
    },
    {
      title: "E-commerce Campaign",
      category: "Copywriting",
      description: "Created persuasive ad copy for seasonal campaign, resulting in 40% increase in conversions.",
      tags: ["Ads", "Email", "Landing Pages"]
    },
    {
      title: "Social Media Rebrand",
      category: "Digital Marketing",
      description: "Managed complete social media rebrand with content calendar and engagement strategy.",
      tags: ["Social", "Design", "Analytics"]
    },
    {
      title: "Website Redesign",
      category: "Web Development",
      description: "Built responsive website with modern design and optimized user experience.",
      tags: ["React", "UI/UX", "Responsive"]
    },
    {
      title: "Visual Identity Package",
      category: "Graphic Design",
      description: "Designed complete brand identity including logo, color palette, and marketing materials.",
      tags: ["Branding", "Logo", "Print"]
    },
    {
      title: "Content Marketing Guide",
      category: "Content Management",
      description: "Created comprehensive guide and framework for content marketing best practices.",
      tags: ["Strategy", "Documentation", "Training"]
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
