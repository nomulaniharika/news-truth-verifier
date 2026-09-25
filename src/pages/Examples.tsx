import { CheckCircle2, XCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Examples = () => {
  const examples = [
    {
      verdict: "REAL" as const,
      confidence: 94,
      headline: "Scientists Discover New Method for Carbon Capture",
      source: "Nature Journal",
      reasoning: "Article cites peer-reviewed research, includes expert quotes, and provides verifiable data."
    },
    {
      verdict: "FAKE" as const,
      confidence: 89,
      headline: "Miracle Cure for All Diseases Found in Common Vegetable",
      source: "Unknown Blog",
      reasoning: "Sensational claims without scientific evidence, anonymous sources, and exaggerated language."
    },
    {
      verdict: "REAL" as const,
      confidence: 91,
      headline: "Global Markets React to Central Bank Policy Changes",
      source: "Financial Times",
      reasoning: "Balanced reporting from credible financial publication with verified market data."
    },
    {
      verdict: "FAKE" as const,
      confidence: 96,
      headline: "Government Using 5G Towers to Control Weather Patterns",
      source: "Conspiracy News Network",
      reasoning: "Conspiracy theory with no factual basis, contradicts established scientific knowledge."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero with Bento Grid Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 animate-in fade-in slide-in-from-top-8 duration-700">
            Analysis{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Examples
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            See how our AI analyzes different types of news articles and identifies misinformation
          </p>

          {/* Creative Masonry-style Grid */}
          <div className="grid md:grid-cols-2 gap-6 auto-rows-auto">
            {examples.map((example, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 ${
                  index % 3 === 0 ? 'md:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  {example.verdict === "REAL" ? (
                    <div className="w-12 h-12 rounded-full bg-verified/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-verified" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-6 h-6 text-destructive" />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <Badge
                      variant={example.verdict === "REAL" ? "outline" : "destructive"}
                      className="mb-2"
                    >
                      {example.verdict}
                    </Badge>
                    <h3 className="font-bold text-lg mb-2 leading-tight">
                      {example.headline}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Source: {example.source}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Confidence</span>
                      <span className="font-semibold">{example.confidence}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          example.verdict === "REAL"
                            ? "bg-gradient-to-r from-verified to-verified/80"
                            : "bg-gradient-to-r from-destructive to-destructive/80"
                        }`}
                        style={{ width: `${example.confidence}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground border-l-2 border-primary pl-3">
                    {example.reasoning}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Creative Layout */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "94%", label: "Accuracy" },
              { value: "2.5s", label: "Avg Analysis" },
              { value: "50K+", label: "Articles Analyzed" },
              { value: "24/7", label: "Availability" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border-2 border-border hover:border-primary transition-all hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Examples;
