import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hello! I'm JARVIS, Shubhayu's AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleToggle = () => {
    console.log("JARVIS button clicked! Current state:", isOpen);
    setIsOpen(!isOpen);
  };

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const sendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const apiUrl =
        import.meta.env.VITE_API_URL ||
        (import.meta.env.PROD
          ? window.location.origin
          : "http://localhost:3001");
      const response = await fetch(`${apiUrl}/api/jarvis/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (data.success) {
        const jarvisMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, jarvisMessage]);
      } else {
        throw new Error(data.message || "Failed to get response");
      }
    } catch (error) {
      console.error("JARVIS chat error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing technical difficulties. Please try again or contact Shubhayu directly.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);

      toast({
        title: "Connection Error",
        description: "Unable to reach JARVIS. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = async (type: string, action: () => void) => {
    action();

    // Also send a message to JARVIS about the action
    const actionMessages: { [key: string]: string } = {
      contact: "I'd like to contact Shubhayu",
      skills: "Tell me about Shubhayu's skills",
      projects: "Show me Shubhayu's projects",
    };

    if (actionMessages[type]) {
      await sendMessage(actionMessages[type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* JARVIS Chat Interface */}
      {isOpen && (
        <div className="glass-card mb-4 w-96 h-96 animate-fade-in-up flex flex-col shadow-2xl">
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-orbitron font-bold text-sm text-primary">
                  JARVIS
                </h4>
                <p className="text-xs text-muted-foreground font-exo">
                  AI Assistant
                </p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-64">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm font-exo ${
                    message.isUser
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "bg-secondary/10 text-foreground border border-secondary/30"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary/10 border border-secondary/30 p-3 rounded-lg flex items-center">
                  <Loader2 className="w-4 h-4 animate-spin mr-2 text-secondary" />
                  <span className="text-sm font-exo text-muted-foreground">
                    JARVIS is thinking...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-white/10">
            <div className="grid grid-cols-1 gap-2 mb-3">
              <Button
                variant="outline"
                size="sm"
                className="text-left justify-start font-exo text-xs glass border-secondary/30 text-secondary hover:bg-secondary/20"
                onClick={() => handleQuickAction("contact", handleContactClick)}
              >
                📧 Contact Shubhayu
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-left justify-start font-exo text-xs glass border-accent/30 text-accent hover:bg-accent/20"
                  onClick={() =>
                    handleQuickAction("projects", () =>
                      window.open("https://wealth-ruby.vercel.app/", "_blank")
                    )
                  }
                >
                  🚀 Projects
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-left justify-start font-exo text-xs glass border-power-stone/30 text-power-stone hover:bg-power-stone/20"
                  onClick={() =>
                    handleQuickAction("skills", () =>
                      document
                        .getElementById("skills")
                        ?.scrollIntoView({ behavior: "smooth" })
                    )
                  }
                >
                  ⚡ Skills
                </Button>
              </div>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask JARVIS anything..."
                className="glass border-primary/30 font-exo text-xs"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="sm"
                disabled={isLoading || !inputMessage.trim()}
                className="bg-primary hover:bg-primary/80"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative">
        <Button
          size="icon"
          className={`w-14 h-14 rounded-full glow-hover font-orbitron transition-all duration-300 relative z-10 cursor-pointer ${
            isOpen
              ? "bg-accent hover:bg-accent/80 rotate-180"
              : "bg-primary hover:bg-primary/80"
          }`}
          onClick={handleToggle}
          style={{ pointerEvents: "auto" }}
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
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping pointer-events-none"></div>
            <div
              className="absolute inset-2 rounded-full bg-primary/10 animate-ping pointer-events-none"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

export default FloatingActionButton;
