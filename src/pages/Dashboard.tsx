import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { Users, GraduationCap, School, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const gradeData = [
  { name: "1º", value: 4.5 },
  { name: "2º", value: 4.2 },
  { name: "3º", value: 5.8 },
  { name: "4º", value: 4.9 },
  { name: "5º", value: 4.3 },
  { name: "6º", value: 3.5 },
];

const frequencyData = [
  { name: "Jan", value: 20 },
  { name: "Fev", value: 35 },
  { name: "Mar", value: 50 },
  { name: "Abr", value: 45 },
  { name: "Mai", value: 65 },
];

const recentActivities = [
  { id: 1, action: "Inter Foint.", color: "#2196F3", code: "#F44335" },
  { id: 2, action: "FInter Spations", color: "#2196F3", code: "#F44335" },
  { id: 3, action: "Inter Foint.", color: "#2196F3", code: "#F44335" },
  { id: 4, action: "Inter Foint", color: "#2196F3", code: "#F44335" },
  { id: 5, action: "Inter Foint.", color: "#2196F3", code: "#F44335" },
];

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <Header title="Dashboard" />
      
      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Users}
            title="Total de Alunos"
            value="1,234"
            iconColor="text-primary"
          />
          <StatCard
            icon={GraduationCap}
            title="Total de Professores"
            value="87"
            iconColor="text-primary"
          />
          <StatCard
            icon={School}
            title="Turmas Ativas"
            value="42"
            iconColor="text-primary"
          />
          <StatCard
            icon={BookOpen}
            title="Disciplinas"
            value="15"
            iconColor="text-primary"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Média de Notas por Turma</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={gradeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 6]} />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Frequência Mensal</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={frequencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Atividades Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2 text-sm font-medium text-muted-foreground pb-2 border-b">
                  <span>Data</span>
                  <span>Ação</span>
                  <span>Usuário</span>
                  <span>Detalhes</span>
                </div>
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="grid grid-cols-4 gap-2 text-sm items-center">
                    <span className="text-muted-foreground">{activity.id}</span>
                    <span className="truncate">{activity.action}</span>
                    <span style={{ color: activity.color }} className="font-medium">
                      {activity.color === "#2196F3" ? "#2196F3" : ""}
                    </span>
                    <span style={{ color: activity.code }} className="font-medium">
                      {activity.code === "#F44335" ? "#F44335" : ""}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
