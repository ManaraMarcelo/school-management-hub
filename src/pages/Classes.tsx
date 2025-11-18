import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Plus } from "lucide-react";

const classes = [
  { id: 1, name: "9º Ano A", students: 28, period: "Student 2e/", teacher: "Prof. Maria Silva" },
  { id: 2, name: "9º Ano A", students: 28, period: "Terid/202a/", teacher: "Prof. Maria Silva" },
  { id: 3, name: "9º Ano A", students: 28, period: "Yetiol/2024", teacher: "Prof. Maria Silva" },
];

export default function Classes() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <Header title="Turmas" />
      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Turmas</h2>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Nova Turma
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <Card key={classItem.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{classItem.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{classItem.students} alunos</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{classItem.period}</p>
                  <p className="text-sm font-medium">{classItem.teacher}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    View details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
