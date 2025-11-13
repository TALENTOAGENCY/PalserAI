import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-recruitment.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              AI-Powered Recruitment
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Transform Your Hiring Process with AI
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              Accelerate sourcing, streamline your pipeline, and find the perfect candidates faster with our intelligent recruitment platform.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Zap className="h-5 w-5" />
                  <span className="text-2xl font-bold">10x</span>
                </div>
                <p className="text-sm text-muted-foreground">Faster Sourcing</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Target className="h-5 w-5" />
                  <span className="text-2xl font-bold">95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Match Accuracy</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-2xl font-bold">50%</span>
                </div>
                <p className="text-sm text-muted-foreground">Time Saved</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-3xl" />
            <img
              src={heroImage}
              alt="AI Recruitment Platform"
              className="relative rounded-2xl shadow-2xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
