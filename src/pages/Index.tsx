import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { NewsAnalyzer } from "@/components/NewsAnalyzer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <NewsAnalyzer />
    </div>
  );
};

export default Index;
