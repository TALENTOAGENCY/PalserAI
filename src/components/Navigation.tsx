import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  GitBranch,
  Calendar,
  Sparkles
} from "lucide-react";

export const navItems = [
    { path: "/", label: "Home", icon: Sparkles },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/candidates", label: "Candidates", icon: Users },
    { path: "/pipeline", label: "Pipeline", icon: GitBranch },
    { path: "/schedule", label: "Schedule", icon: Calendar },
];

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

export function Navigation({ className, onLinkClick }: NavigationProps) {
  const location = useLocation();

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <Link key={item.path} to={item.path} className="w-full" onClick={onLinkClick}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2",
                isActive && "bg-secondary text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}
