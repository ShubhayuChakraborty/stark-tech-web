import { Heart, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Avengers Quote */}
          <div className="glass-card max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary mr-3" />
              <span className="font-orbitron font-bold text-primary">AVENGERS PROTOCOL</span>
              <Shield className="w-6 h-6 text-primary ml-3" />
            </div>
            <blockquote className="font-orbitron text-lg md:text-xl font-bold gradient-text">
              "I can do this all day — with code."
            </blockquote>
            <p className="text-muted-foreground font-exo text-sm mt-2">
              - Inspired by Captain America's determination
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-border/30">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="font-exo text-muted-foreground">
                © 2025 Shubhayu Chakraborty. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center">
              <span className="font-exo text-muted-foreground mr-2">
                Built with
              </span>
              <Heart className="w-4 h-4 text-reality-stone mx-1 animate-pulse" />
              <span className="font-exo text-muted-foreground ml-2">
                and cutting-edge tech
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-4">
            <p className="text-xs text-muted-foreground font-exo">
              Powered by React • Tailwind CSS • TypeScript • Deployed with Lovable
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;