import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        size="icon"
        variant="outline"
        className="w-12 h-12 rounded-full glass border-primary/30 glow-hover transition-all duration-300"
        onClick={toggleTheme}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {/* Iron Man Reactor-style design */}
        <div className="relative">
          {isDark ? (
            <Sun className="w-5 h-5 text-mind-stone transition-transform duration-300 hover:rotate-180" />
          ) : (
            <Moon className="w-5 h-5 text-primary transition-transform duration-300 hover:rotate-180" />
          )}
          
          {/* Reactor rings */}
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute inset-1 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
        </div>
      </Button>
    </div>
  );
};

export default ThemeToggle;