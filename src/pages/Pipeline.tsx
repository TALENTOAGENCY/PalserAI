import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const pipelineStages = [
  {
    id: 1,
    name: "New Applications",
    count: 24,
    color: "bg-info",
    candidates: [
      { name: "John Smith", role: "Backend Developer", time: "2h ago" },
      { name: "Lisa Wang", role: "Data Scientist", time: "5h ago" },
      { name: "Tom Brown", role: "Product Manager", time: "1d ago" },
    ],
  },
  {
    id: 2,
    name: "Screening",
    count: 12,
    color: "bg-primary",
    candidates: [
      { name: "Sarah Johnson", role: "Frontend Developer", time: "1d ago" },
      { name: "Mike Chen", role: "Full Stack Engineer", time: "2d ago" },
    ],
  },
  {
    id: 3,
    name: "Interview",
    count: 8,
    color: "bg-warning",
    candidates: [
      { name: "Emma Davis", role: "Product Designer", time: "3d ago" },
      { name: "Alex Kumar", role: "DevOps Engineer", time: "4d ago" },
    ],
  },
  {
    id: 4,
    name: "Final Round",
    count: 5,
    color: "bg-purple-500",
    candidates: [
      { name: "Rachel Green", role: "Marketing Manager", time: "5d ago" },
    ],
  },
  {
    id: 5,
    name: "Offer",
    count: 3,
    color: "bg-success",
    candidates: [
      { name: "David Park", role: "Senior Engineer", time: "1w ago" },
    ],
  },
];

const Pipeline = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Recruitment Pipeline</h1>
            <p className="text-muted-foreground">Track candidates through your hiring stages</p>
          </div>

          <ScrollArea className="w-full">
            <div className="flex gap-4 pb-4 min-w-max">
              {pipelineStages.map((stage) => (
                <Card key={stage.id} className="w-80 flex-shrink-0">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{stage.name}</CardTitle>
                      <Badge variant="secondary">{stage.count}</Badge>
                    </div>
                    <div className={`h-1 w-full rounded-full ${stage.color} mt-2`} />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {stage.candidates.map((candidate, idx) => (
                        <Card key={idx} className="border border-border bg-card hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-foreground">{candidate.name}</h4>
                            <p className="text-sm text-muted-foreground">{candidate.role}</p>
                            <p className="text-xs text-muted-foreground mt-2">{candidate.time}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Pipeline;
