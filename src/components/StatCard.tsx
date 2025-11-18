import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  iconColor?: string;
}

export function StatCard({ icon: Icon, title, value, iconColor = "text-primary" }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
          </div>
          <div className={`w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center`}>
            <Icon className={`w-7 h-7 ${iconColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
