import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { AnalysisResult } from "./AnalysisResult";

interface Analysis {
  verdict: "REAL" | "FAKE";
  confidence: number;
  reasoning: string;
  key_indicators: string[];
}

export const NewsAnalyzer = () => {
  const [newsText, setNewsText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  const handleAnalyze = async () => {
    if (!newsText.trim()) {
      toast.error("Please enter some news text to analyze");
      return;
    }

    setIsAnalyzing(true);
    setAnalysis(null);

    try {
      const { data, error } = await supabase.functions.invoke('analyze-news', {
        body: { newsText }
      });

      if (error) throw error;

      setAnalysis(data);
      toast.success("Analysis complete!");
    } catch (error) {
      console.error('Analysis error:', error);
      toast.error("Failed to analyze news. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 pb-20">
      <Card className="p-8 shadow-card border-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
        <div className="space-y-6">
          <div>
            <label htmlFor="news-text" className="text-lg font-semibold block mb-3">
              Paste News Article
            </label>
            <Textarea
              id="news-text"
              placeholder="Copy and paste the news article you want to verify here..."
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
              className="min-h-[200px] text-base resize-none focus-visible:ring-primary"
              disabled={isAnalyzing}
            />
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !newsText.trim()}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity shadow-md"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Analyze Article
              </>
            )}
          </Button>
        </div>
      </Card>

      {analysis && <AnalysisResult analysis={analysis} />}
    </section>
  );
};
