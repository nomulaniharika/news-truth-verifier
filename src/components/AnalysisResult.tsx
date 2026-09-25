import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface AnalysisResultProps {
  analysis: {
    verdict: "REAL" | "FAKE";
    confidence: number;
    reasoning: string;
    key_indicators: string[];
  };
}

export const AnalysisResult = ({ analysis }: AnalysisResultProps) => {
  const isReal = analysis.verdict === "REAL";

  return (
    <Card 
      className={`mt-8 p-8 border-2 animate-in fade-in slide-in-from-bottom-8 duration-500 ${
        isReal 
          ? 'bg-verified/5 border-verified' 
          : 'bg-destructive/5 border-destructive'
      }`}
    >
      <div className="space-y-6">
        {/* Verdict Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {isReal ? (
              <div className="p-3 rounded-xl bg-verified/10">
                <CheckCircle2 className="h-8 w-8 text-verified" />
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
            )}
            <div>
              <h3 className="text-2xl font-bold">
                {isReal ? 'Likely Authentic' : 'Likely Fake News'}
              </h3>
              <p className="text-muted-foreground">AI Analysis Complete</p>
            </div>
          </div>
          <Badge 
            variant={isReal ? "default" : "destructive"}
            className={`text-lg px-4 py-2 ${
              isReal ? 'bg-verified hover:bg-verified' : ''
            }`}
          >
            {analysis.verdict}
          </Badge>
        </div>

        {/* Confidence Score */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-semibold">Confidence Score</span>
            </div>
            <span className="text-2xl font-bold text-primary">
              {analysis.confidence}%
            </span>
          </div>
          <Progress 
            value={analysis.confidence} 
            className="h-3"
          />
        </div>

        {/* Reasoning */}
        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Analysis</h4>
          <p className="text-muted-foreground leading-relaxed">
            {analysis.reasoning}
          </p>
        </div>

        {/* Key Indicators */}
        <div className="space-y-3">
          <h4 className="font-semibold text-lg">Key Indicators</h4>
          <ul className="space-y-2">
            {analysis.key_indicators.map((indicator, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <div className={`mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                  isReal ? 'bg-verified' : 'bg-destructive'
                }`} />
                <span className="leading-relaxed">{indicator}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
