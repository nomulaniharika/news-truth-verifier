import { ShieldCheck } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-glow mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <ShieldCheck className="w-10 h-10 text-primary-foreground" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Detect Fake News with{" "}
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            AI Precision
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Verify news authenticity in seconds using advanced AI analysis. 
          Get detailed confidence scores and comprehensive explanations.
        </p>
      </div>
    </section>
  );
};
