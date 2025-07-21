import { GraduationCap, Target, Heart } from "lucide-react";
import TiltCard from "./TiltCard";
import AdvancedTypography from "./AdvancedTypography";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <AdvancedTypography
            text="MISSION BRIEFING"
            variant="gradient"
            className="font-orbitron font-black text-4xl md:text-5xl mb-4"
          />
          <p className="text-muted-foreground font-exo text-lg max-w-2xl mx-auto">
            Every hero has an origin story. Here's mine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <TiltCard className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card-advanced liquid-morph p-6 glow-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 holographic">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-primary">Education</h3>
              </div>
              <p className="font-exo text-foreground mb-3">
                <span className="font-semibold">B.Tech CSE (AI)</span><br />
                Techno India University
              </p>
              <p className="text-foreground font-exo">
                Specializing in Artificial Intelligence and Machine Learning, building the foundation for next-gen technology solutions.
              </p>
            </div>
          </TiltCard>

          {/* Career Goal */}
          <TiltCard className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card-advanced liquid-morph p-6 glow-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4 holographic">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-secondary">Mission</h3>
              </div>
              <p className="font-exo text-foreground mb-3">
                <span className="font-semibold">Full-Stack Developer</span><br />
                Innovation-Driven Solutions
              </p>
              <p className="text-foreground font-exo">
                Aspiring to become a versatile full-stack developer, capable of building end-to-end solutions that make a real impact.
              </p>
            </div>
          </TiltCard>

          {/* Fun Facts */}
          <TiltCard className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card-advanced liquid-morph p-6 glow-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4 holographic">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-accent">Personal</h3>
              </div>
              <p className="font-exo text-foreground mb-3">
                <span className="font-semibold">Interests & Inspirations</span>
              </p>
              <ul className="text-foreground font-exo space-y-1">
                <li>• Fan of MS Dhoni's leadership</li>
                <li>• Marvel universe enthusiast</li>
                <li>• Passionate about startups</li>
                <li>• Cricket strategy analyzer</li>
              </ul>
            </div>
          </TiltCard>
        </div>

        {/* Quote */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card max-w-4xl mx-auto">
            <blockquote className="font-orbitron text-xl md:text-2xl font-bold gradient-text">
              "Just like how Dhoni leads with calm precision and the Avengers assemble to face challenges, 
              I believe in strategic thinking, continuous learning, and building solutions that matter."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;