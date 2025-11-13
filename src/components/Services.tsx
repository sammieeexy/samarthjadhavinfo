import { Card } from "@/components/ui/card";
import { FileText, PenTool, BarChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Content Creation",
      description: "High-quality articles, blogs, and social media content that engages your audience and tells your brand story effectively."
    },
    {
      icon: PenTool,
      title: "Copywriting & Content Strategy",
      description: "Persuasive ads, marketing campaigns, email copy, and comprehensive content management strategies that drive results."
    },
    {
      icon: BarChart,
      title: "Design & Marketing",
      description: "Graphic design, branding, UI/UX basics, social media management, and digital marketing to elevate your brand presence."
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional services tailored to your business needs
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-2">
              <service.icon className="w-14 h-14 mb-6 text-accent" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
