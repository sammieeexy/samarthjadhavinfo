import { Card } from "@/components/ui/card";
import { FileText, PenTool, BarChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Content Writing",
      description: "Engaging blog posts, articles, and website content that captivates your audience and boosts your online presence."
    },
    {
      icon: PenTool,
      title: "Copywriting",
      description: "Persuasive marketing copy, ad campaigns, and sales materials designed to convert prospects into customers."
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies including SEO, SEM, social media management, and analytics-driven campaigns."
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
