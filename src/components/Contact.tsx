import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:jadhavsamarth78@gmail.com?subject=Project Inquiry&body=Hi Samarth, I'd like to discuss a project with you.";
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to bring your ideas to life
        </p>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a 
                    href="mailto:jadhavsamarth78@gmail.com" 
                    className="text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    jadhavsamarth78@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a 
                    href="tel:+919049391868" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +91 9049391868
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                <Linkedin className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/samarth-jadhav-b9143736a" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    linkedin.com/in/samarth-jadhav-b9143736a
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                onClick={handleEmailClick}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 bg-accent/10 border-accent/20">
            <p className="text-center text-sm text-muted-foreground italic">
              <strong>Note:</strong> Client testimonials coming soon as I complete my first projects!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
