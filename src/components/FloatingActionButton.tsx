import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* JARVIS Chat Interface (Placeholder) */}
      {isOpen && (
        <div className="glass-card mb-4 w-80 animate-fade-in-up">
          <div className="p-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-orbitron font-bold text-sm text-primary">JARVIS</h4>
                <p className="text-xs text-muted-foreground font-exo">AI Assistant</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-primary/10 rounded-lg p-3 border border-primary/30">
                <p className="text-sm font-exo text-foreground">
                  Hello! I'm JARVIS, Shubhayu's AI assistant. How can I help you today?
                </p>
              </div>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-left justify-start font-exo text-xs glass border-secondary/30 text-secondary hover:bg-secondary/20"
                  onClick={handleContactClick}
                >
                  📧 Contact Shubhayu
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-left justify-start font-exo text-xs glass border-accent/30 text-accent hover:bg-accent/20"
                  onClick={() => window.open('https://wealth-ruby.vercel.app/', '_blank')}
                >
                  🚀 View Latest Project
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-left justify-start font-exo text-xs glass border-power-stone/30 text-power-stone hover:bg-power-stone/20"
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ⚡ Check Skills Matrix
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        size="icon"
        className={`w-14 h-14 rounded-full glow-hover font-orbitron transition-all duration-300 ${
          isOpen 
            ? 'bg-accent hover:bg-accent/80 rotate-180' 
            : 'bg-primary hover:bg-primary/80'
        }`}
        onClick={handleToggle}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Pulse rings when closed */}
      {!isOpen && (
        <>
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
          <div className="absolute inset-2 rounded-full bg-primary/10 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </>
      )}
    </div>
  );
};

export default FloatingActionButton;