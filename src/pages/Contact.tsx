import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Creative Split Layout */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Get in{" "}
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Touch
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Have questions about our AI-powered news verification? 
                  We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground">contact@newsguard.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Available Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="relative mt-12 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl blur-3xl" />
                <div className="relative p-8 rounded-2xl border-2 border-border bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground italic">
                    "NewsGuard has become an essential tool in our newsroom. 
                    It helps us verify information quickly and maintain our credibility."
                  </p>
                  <p className="mt-4 font-semibold">— Sarah Chen, Editor-in-Chief</p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <Card className="p-8 shadow-card animate-in fade-in slide-in-from-right-8 duration-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    required
                    className="w-full min-h-[150px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion-style Cards */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "How accurate is the AI detection?",
                a: "Our system maintains 94% accuracy across various types of news content, constantly improving through machine learning."
              },
              {
                q: "What makes NewsGuard different?",
                a: "We combine multiple AI models with expert-verified datasets to provide transparent, explainable results."
              },
              {
                q: "Is my data kept private?",
                a: "Yes, we don't store the articles you analyze. All processing happens in real-time and data is not retained."
              }
            ].map((faq, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
