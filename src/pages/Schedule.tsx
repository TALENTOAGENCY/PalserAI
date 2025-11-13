import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, MapPin, User } from "lucide-react";

const upcomingInterviews = [
  {
    id: 1,
    candidate: "Sarah Johnson",
    role: "Senior Frontend Developer",
    time: "Today, 2:00 PM - 3:00 PM",
    type: "Video Call",
    interviewer: "Mike Wilson",
    status: "confirmed",
  },
  {
    id: 2,
    candidate: "Emma Davis",
    role: "Product Designer",
    time: "Today, 4:30 PM - 5:30 PM",
    type: "In-Person",
    location: "Office - Room 201",
    interviewer: "Lisa Chen",
    status: "confirmed",
  },
  {
    id: 3,
    candidate: "Mike Chen",
    role: "Full Stack Engineer",
    time: "Tomorrow, 10:00 AM - 11:00 AM",
    type: "Video Call",
    interviewer: "Sarah Miller",
    status: "pending",
  },
  {
    id: 4,
    candidate: "Alex Kumar",
    role: "DevOps Engineer",
    time: "Tomorrow, 3:00 PM - 4:00 PM",
    type: "Video Call",
    interviewer: "Tom Brown",
    status: "confirmed",
  },
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Interview Schedule</h1>
              <p className="text-muted-foreground">Manage and track upcoming interviews</p>
            </div>
            <Button>Schedule New</Button>
          </div>

          <div className="grid gap-4">
            {upcomingInterviews.map((interview) => (
              <Card key={interview.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{interview.candidate}</CardTitle>
                      <p className="text-sm text-muted-foreground">{interview.role}</p>
                    </div>
                    <Badge 
                      variant={interview.status === "confirmed" ? "default" : "secondary"}
                    >
                      {interview.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {interview.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        Interviewer: {interview.interviewer}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {interview.type === "Video Call" ? (
                        <>
                          <Video className="h-4 w-4" />
                          {interview.type}
                        </>
                      ) : (
                        <>
                          <MapPin className="h-4 w-4" />
                          {interview.location}
                        </>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline">Reschedule</Button>
                      <Button size="sm" variant="outline">Cancel</Button>
                      {interview.type === "Video Call" && (
                        <Button size="sm">Join Call</Button>
                      )}
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

export default Schedule;
