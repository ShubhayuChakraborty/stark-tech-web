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
      
      {/* Enhanced floating particles with unique effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glowing particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-4 h-4 bg-primary/50 rounded-full animate-float shadow-[0_0_30px_rgba(var(--primary),0.6)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
        
        {/* Twinkling constellation */}
        {[...Array(40)].map((_, i) => {
          const colors = ['bg-primary/70', 'bg-secondary/70', 'bg-accent/70', 'bg-white/70'];
          return (
            <div
              key={`star-${i}`}
              className={`absolute w-1 h-1 ${colors[i % colors.length]} rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                boxShadow: `0 0 10px currentColor`,
              }}
            />
          );
        })}
        
        {/* Floating energy orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-6 h-6 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 rounded-full animate-drift shadow-[0_0_25px_rgba(var(--primary),0.4)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
        
        {/* Shooting stars */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 animate-shooting-star"
            style={{
              left: `${-10 + Math.random() * 120}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 15 + 3}s`,
              animationDuration: '2.5s',
              transform: 'rotate(45deg)',
            }}
          />
        ))}
        
        {/* Hexagonal tech elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute w-8 h-8 border border-primary/30 rotate-45 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
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