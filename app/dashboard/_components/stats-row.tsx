import { TrendingUp, Users, Calendar, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Board } from "@/lib/supabase/models";

export default function StatsRow({ boards }: { boards: Board[] }) {
  const total = boards.length;
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const activeThisWeek = boards.filter(
    (b) => new Date(b.updated_at) > weekAgo,
  ).length;

  const Stat = ({
    label,
    value,
    sub,
    icon,
    accent,
  }: {
    label: string;
    value: string | number;
    sub?: string;
    icon: React.ReactNode;
    accent: string;
  }) => (
    <Card className="glass-card hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="size-2 bg-primary rounded-full" />
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {label}
              </p>
            </div>
            <p className="text-3xl font-bold">{value}</p>
            {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
          </div>
          <div
            className={`size-12 rounded-xl grid place-items-center ${accent}`}
          >
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <Stat
        label="Total Boards"
        value={total}
        sub="+2 from last week"
        icon={<TrendingUp className="h-6 w-6 text-primary" />}
        accent="bg-gradient-to-br from-primary/10 to-primary/5"
      />
      <Stat
        label="Active This Week"
        value={activeThisWeek}
        sub="High activity"
        icon={<Rocket className="h-6 w-6 text-secondary" />}
        accent="bg-gradient-to-br from-secondary/10 to-secondary/5"
      />
      <Stat
        label="Team Members"
        value={4}
        sub="All active"
        icon={<Users className="h-6 w-6 text-chart-2" />}
        accent="bg-gradient-to-br from-chart-2/10 to-chart-2/5"
      />
      <Stat
        label="Due This Week"
        value={12}
        sub="3 overdue"
        icon={<Calendar className="h-6 w-6 text-chart-4" />}
        accent="bg-gradient-to-br from-chart-4/10 to-chart-4/5"
      />
    </div>
  );
}
