import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Mail, Phone, MapPin, Sparkles } from "lucide-react";

const mockCandidates = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Frontend Developer",
    location: "San Francisco, CA",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    skills: ["React", "TypeScript", "UI/UX"],
    match: 95,
    status: "Interview",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Full Stack Engineer",
    location: "New York, NY",
    email: "mike.chen@email.com",
    phone: "+1 (555) 234-5678",
    skills: ["Node.js", "React", "PostgreSQL"],
    match: 88,
    status: "Screening",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Product Designer",
    location: "Austin, TX",
    email: "emma.d@email.com",
    phone: "+1 (555) 345-6789",
    skills: ["Figma", "User Research", "Prototyping"],
    match: 92,
    status: "Final Round",
  },
  {
    id: 4,
    name: "Alex Kumar",
    role: "DevOps Engineer",
    location: "Seattle, WA",
    email: "alex.k@email.com",
    phone: "+1 (555) 456-7890",
    skills: ["AWS", "Docker", "Kubernetes"],
    match: 85,
    status: "New",
  },
];

const Candidates = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Candidates</h1>
            <p className="text-muted-foreground">Search and manage your candidate pool</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search candidates by name, skills, or role..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button className="gap-2">
              <Sparkles className="h-4 w-4" />
              AI Match
            </Button>
          </div>

          <div className="grid gap-4">
            {mockCandidates.map((candidate) => (
              <Card key={candidate.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{candidate.name}</h3>
                          <p className="text-muted-foreground">{candidate.role}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant={candidate.status === "Final Round" ? "default" : "secondary"}>
                            {candidate.status}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Sparkles className="h-3 w-3 text-primary" />
                            <span className="text-sm font-semibold text-primary">{candidate.match}% Match</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {candidate.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {candidate.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {candidate.phone}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 sm:flex-col">
                      <Button size="sm" className="flex-1 sm:flex-none">View Profile</Button>
                      <Button size="sm" variant="outline" className="flex-1 sm:flex-none">Schedule</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
