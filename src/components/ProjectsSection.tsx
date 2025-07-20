import { ExternalLink, Github, Zap, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-orbitron font-black text-4xl md:text-5xl mb-4 gradient-text">
            PROJECT SHOWCASE
          </h2>
          <p className="text-muted-foreground font-exo text-lg max-w-2xl mx-auto">
            Like Tony Stark's innovations, each project represents a step forward in the mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Featured Project */}
          <div className="glass-card glow-hover animate-fade-in-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-orbitron font-black text-2xl text-primary">WEALTH</h3>
                <p className="text-muted-foreground font-exo">Featured Project</p>
              </div>
            </div>

            <p className="font-exo text-lg mb-6 text-foreground">
              AI-powered finance dashboard that transforms complex financial data into actionable insights. 
              Built with cutting-edge technology to provide users with real-time analytics and intelligent 
              financial planning tools.
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="font-orbitron font-bold text-sm text-primary mb-3 uppercase tracking-wider">
                Technology Arsenal
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind CSS', 'Chart.js', 'JavaScript', 'Responsive Design'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-exo font-semibold bg-primary/10 text-primary rounded-full border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                className="flex-1 font-orbitron font-bold glow-hover bg-primary hover:bg-primary/80"
                onClick={() => window.open('https://wealth-ruby.vercel.app/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Launch Demo
              </Button>
              <Button 
                variant="outline" 
                className="font-orbitron font-bold glass border-secondary text-secondary hover:bg-secondary/20"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </Button>
            </div>
          </div>

          {/* Project Features */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="glass-card">
              <div className="flex items-center mb-3">
                <Zap className="w-6 h-6 text-power-stone mr-3" />
                <h4 className="font-orbitron font-bold text-lg">AI-Powered Analytics</h4>
              </div>
              <p className="text-muted-foreground font-exo">
                Advanced algorithms analyze spending patterns and provide personalized financial insights.
              </p>
            </div>

            <div className="glass-card">
              <div className="flex items-center mb-3">
                <BarChart3 className="w-6 h-6 text-space-stone mr-3" />
                <h4 className="font-orbitron font-bold text-lg">Real-time Dashboard</h4>
              </div>
              <p className="text-muted-foreground font-exo">
                Interactive charts and graphs that update in real-time to show your financial status.
              </p>
            </div>

            <div className="glass-card">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-reality-stone mr-3" />
                <h4 className="font-orbitron font-bold text-lg">Secure & Responsive</h4>
              </div>
              <p className="text-muted-foreground font-exo">
                Built with security-first approach and optimized for all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>

        {/* More Projects Coming Soon */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="font-orbitron font-bold text-xl text-secondary mb-3">
              More Projects In Development
            </h3>
            <p className="text-muted-foreground font-exo">
              Like the Avengers expanding their roster, more innovative projects are being assembled. 
              Stay tuned for updates on new AI-powered applications and full-stack solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;