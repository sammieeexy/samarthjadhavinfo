import { Card } from "@/components/ui/card";
import { Sparkles, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionate professional dedicated to creating impactful digital experiences
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I'm Samarth Jadhav, a versatile creative professional passionate about Content Writing, Content Management, Copywriting, Graphic Design, Digital Marketing, and Web Development.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in creating engaging content that resonates with audiences, managing comprehensive digital strategies, writing persuasive copy that converts, and designing creative visuals that captivate.
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              With a motivated, professional, and results-oriented approach, I'm committed to delivering excellence in every project I undertake.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in the power of well-crafted content and compelling design to drive meaningful connections and business growth.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Creative Excellence</h3>
            <p className="text-muted-foreground">
              Combining creativity with strategy to deliver exceptional results
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Target className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Results-Oriented</h3>
            <p className="text-muted-foreground">
              Focused on achieving measurable outcomes for every project
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Fast Learner</h3>
            <p className="text-muted-foreground">
              Continuously adapting and mastering new tools and techniques
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
