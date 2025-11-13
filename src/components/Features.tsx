import { Card, CardContent } from "@/components/ui/card";
import { Search, GitBranch, Calendar, BarChart3, Brain, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Matching",
    description: "Advanced algorithms match candidates to roles based on skills, experience, and cultural fit.",
  },
  {
    icon: Search,
    title: "Smart Candidate Search",
    description: "Find the perfect candidates faster with AI-powered search and filtering capabilities.",
  },
  {
    icon: GitBranch,
    title: "Customizable Pipeline",
    description: "Build and manage custom recruitment pipelines that fit your hiring process.",
  },
  {
    icon: Calendar,
    title: "Auto Scheduling",
    description: "Automated interview scheduling that syncs with your calendar and candidates' availability.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into your recruitment metrics and team performance.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and focus on building relationships with top talent.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything You Need to Hire Smarter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline every step of your recruitment process
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
