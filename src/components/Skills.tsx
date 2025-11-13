import { Card } from "@/components/ui/card";
import { Pen, Megaphone, FolderKanban, Palette, Code, TrendingUp, Share2 } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Pen,
      title: "Content Writing",
      description: "Creating engaging and impactful content"
    },
    {
      icon: Megaphone,
      title: "Copywriting",
      description: "Persuasive and compelling copy"
    },
    {
      icon: FolderKanban,
      title: "Content Management",
      description: "Strategic content planning and execution"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Adobe Photoshop, Illustrator, Canva"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "HTML, CSS, JavaScript, React basics"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SEO, SEM, and online campaigns"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Platform management and engagement"
    },
    {
      icon: Palette,
      title: "Branding & UI/UX",
      description: "Brand identity and user experience basics"
    },
    {
      icon: Pen,
      title: "Communication & Editing",
      description: "Clear communication and content editing"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A diverse skill set to tackle any creative or technical challenge
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <skill.icon className="w-10 h-10 mb-4 text-accent" />
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
