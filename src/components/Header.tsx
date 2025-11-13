import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 px-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">
                TalentAI
              </span>
            </Link>
            
            <div className="hidden md:flex">
              <Navigation />
            </div>
          </div>

          <div className="flex items-center gap-2 px-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
