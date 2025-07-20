import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Enhanced particle effects */}
      <div className="absolute inset-0 particles overflow-hidden">
        {/* Large floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              background: `hsl(${[259, 217, 0][Math.floor(Math.random() * 3)]}, 94%, 65%)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Small twinkling stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Moving orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-12 h-12 rounded-full opacity-20 animate-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, hsl(${[259, 217, 0][Math.floor(Math.random() * 3)]}, 94%, 65%), transparent)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-primary mr-3 animate-pulse" />
            <span className="text-primary font-orbitron font-bold tracking-wider">
              PORTFOLIO INITIALIZED
            </span>
            <Sparkles className="w-8 h-8 text-primary ml-3 animate-pulse" />
          </div>
          
          <h1 className="font-orbitron font-black text-6xl md:text-8xl mb-6 gradient-text float">
            SHUBHAYU
            <br />
            <span className="text-4xl md:text-6xl">CHAKRABORTY</span>
          </h1>
          
          <div className="glass-card max-w-2xl mx-auto mb-8 glow-hover">
            <h2 className="font-exo text-xl md:text-2xl font-semibold text-secondary mb-2">
              Full-Stack Developer
              <span className="text-muted-foreground font-normal"> (in training)</span>
            </h2>
            <p className="font-orbitron text-lg md:text-xl font-bold text-accent">
              "Assemble the Code. Build the Future."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="font-orbitron font-bold glow-hover bg-primary hover:bg-primary/80"
              onClick={scrollToAbout}
            >
              Explore Mission
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-orbitron font-bold glass border-primary text-primary hover:bg-primary/20 glow-hover"
              onClick={() => window.open('https://wealth-ruby.vercel.app/', '_blank')}
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;