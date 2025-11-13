import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Clock, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Candidates",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Active Positions",
      value: "24",
      change: "+3",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Hired This Month",
      value: "18",
      change: "+5.2%",
      icon: UserCheck,
      trend: "up",
    },
    {
      title: "Avg. Time to Hire",
      value: "21 days",
      change: "-3 days",
      icon: Clock,
      trend: "down",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your recruitment metrics</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <p className={`text-xs ${stat.trend === 'up' ? 'text-success' : 'text-primary'}`}>
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { candidate: "Sarah Johnson", action: "Applied for Senior Developer", time: "2h ago" },
                    { candidate: "Mike Chen", action: "Interview scheduled", time: "4h ago" },
                    { candidate: "Emma Davis", action: "Moved to final round", time: "5h ago" },
                    { candidate: "Alex Kumar", action: "Offer sent", time: "1d ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0">
                      <div>
                        <p className="font-medium text-foreground">{activity.candidate}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pipeline Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { stage: "New Applications", count: 84, color: "bg-info" },
                    { stage: "Screening", count: 42, color: "bg-primary" },
                    { stage: "Interviewing", count: 28, color: "bg-warning" },
                    { stage: "Offer", count: 12, color: "bg-success" },
                  ].map((stage) => (
                    <div key={stage.stage} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{stage.stage}</span>
                        <span className="text-sm font-semibold text-foreground">{stage.count}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full ${stage.color}`}
                          style={{ width: `${(stage.count / 84) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
