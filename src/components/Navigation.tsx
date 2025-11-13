import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          SJ
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-accent transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Contact
          </button>
          <Button 
            onClick={() => window.location.href = "mailto:gurupuhpagraphics@gmail.com,teamarsenicstudios@gmail.com,samarthjadhavpatil46@gmail.com?subject=Project Inquiry&body=Hi Samarth, I'd like to discuss a project with you."}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
