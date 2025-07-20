import { Mail, Linkedin, Instagram, Facebook, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend required
    alert('Message received! Will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:shubhayuchakraborty69@gmail.com",
      color: "primary",
      hoverText: "shubhayuchakraborty69@gmail.com"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "space-stone",
      hoverText: "Connect on LinkedIn"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "reality-stone",
      hoverText: "Follow on Instagram"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      color: "secondary",
      hoverText: "Add on Facebook"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-orbitron font-black text-4xl md:text-5xl mb-4 gradient-text">
            INITIATE CONTACT
          </h2>
          <p className="text-muted-foreground font-exo text-lg max-w-2xl mx-auto">
            Ready to assemble a great project? Let's connect and build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-card animate-fade-in-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-orbitron font-bold text-2xl">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="glass border-primary/30 font-exo"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="glass border-primary/30 font-exo"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="glass border-primary/30 font-exo min-h-[120px]"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full font-orbitron font-bold glow-hover bg-primary hover:bg-primary/80"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Direct Contact */}
            <div className="glass-card">
              <h3 className="font-orbitron font-bold text-xl mb-6 text-primary">
                Direct Contact
              </h3>
              <div className="flex items-center group cursor-pointer glow-hover p-4 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-exo font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground font-exo text-sm">
                    shubhayuchakraborty69@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card">
              <h3 className="font-orbitron font-bold text-xl mb-6 text-secondary">
                Social Networks
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card glow-hover group transition-all duration-300 hover:scale-105"
                    title={social.hoverText}
                  >
                    <div className="flex flex-col items-center p-4">
                      <div className={`w-12 h-12 bg-${social.color}/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-${social.color}/30 transition-colors`}>
                        <social.icon className={`w-6 h-6 text-${social.color}`} />
                      </div>
                      <span className="font-orbitron font-semibold text-sm">{social.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card">
              <h3 className="font-orbitron font-bold text-xl mb-4 text-accent">
                Availability Status
              </h3>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-time-stone rounded-full mr-3 animate-pulse"></div>
                <span className="font-exo text-foreground">
                  Available for collaboration and opportunities
                </span>
              </div>
              <p className="text-muted-foreground font-exo text-sm mt-2">
                Open to internships, freelance projects, and full-time positions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;