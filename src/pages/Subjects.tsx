import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Pencil, Trash2 } from "lucide-react";

const subjects = [
  { id: 1, code: "MAT101", name: "Matemática", hours: "4h/semana", teacher: "Prof. João Santos", classes: "5 turmas" },
  { id: 3, code: "MAT101", name: "Matemática", hours: "4h/semana", teacher: "Prof. João Santos", classes: "5 turmas" },
  { id: 6, code: "MAT101", name: "Matemática", hours: "4h/semana", teacher: "Prof. João Santos", classes: "5 turmas" },
];

export default function Subjects() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <Header title="Disciplinas" />
      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Disciplinas</h2>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Nova Disciplina
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-muted-foreground">Código</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Nome</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Carga Horária</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Professor Responsável</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Turmas</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject) => (
                    <tr key={subject.id} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{subject.code}</td>
                      <td className="p-4">{subject.name}</td>
                      <td className="p-4 text-muted-foreground">{subject.hours}</td>
                      <td className="p-4 text-muted-foreground">{subject.teacher}</td>
                      <td className="p-4 text-muted-foreground">{subject.classes}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/10">
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
