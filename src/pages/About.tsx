import { Brain, Target, Zap, Shield } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Analysis",
      description: "Powered by cutting-edge language models trained on millions of news articles"
    },
    {
      icon: Target,
      title: "High Accuracy",
      description: "Our system achieves industry-leading accuracy in detecting misinformation"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive analysis in seconds, not hours"
    },
    {
      icon: Shield,
      title: "Trusted Protection",
      description: "Protect yourself and others from the spread of fake news"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Creative Grid */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Works
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Our AI-powered system analyzes news articles using advanced natural language processing 
            and machine learning techniques to detect patterns of misinformation.
          </p>
        </div>
      </section>

      {/* Features Grid with Creative Layout */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-primary transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 shadow-glow">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section with Zigzag Layout */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            The Analysis Process
          </h2>
          
          <div className="space-y-12">
            {[
              { step: "01", title: "Text Analysis", desc: "We extract and analyze linguistic patterns, writing style, and content structure" },
              { step: "02", title: "Pattern Recognition", desc: "Our AI identifies common characteristics of misinformation and credible sources" },
              { step: "03", title: "Confidence Scoring", desc: "We provide a detailed confidence score based on multiple verification factors" },
              { step: "04", title: "Detailed Report", desc: "You receive comprehensive reasoning and key indicators for the verdict" }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-right" style={{ ...(index % 2 === 1 && { textAlign: 'left' }) }}>
                  <div className="text-6xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-primary-foreground" />
                </div>
                
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
