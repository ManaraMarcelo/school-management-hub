import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const students = [
  { id: 1, name: "Ana Paula Silva", matricula: "#2196F3", email: "#F44436", status: "Ativo" },
  { id: 2, name: "Bruno Costa Lima", matricula: "#2196F3", email: "#F44436", status: "Ativo" },
  { id: 3, name: "Carla Souza Dias", matricula: "#2196F3", email: "#F44436", status: "Ativo" },
  { id: 4, name: "Daniel Oliveira", matricula: "#2196F3", email: "#F44436", status: "Inativo" },
  { id: 5, name: "Elena Martins", matricula: "#2196F3", email: "#F44436", status: "Ativo" },
];

export default function Students() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <Header title="Gerenciar Alunos" />
      
      <main className="flex-1 p-8">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Buscar aluno..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            Filtrar por Turma
          </Button>
          <Button variant="outline">
            Status: Todos
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Novo Aluno
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-muted-foreground">ID</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Foto</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Nome</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Matrícula</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">E-mail</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4">{student.id}</td>
                      <td className="p-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {student.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      </td>
                      <td className="p-4 font-medium">{student.name}</td>
                      <td className="p-4">
                        <span className="text-primary font-medium">{student.matricula}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-destructive font-medium">{student.email}</span>
                      </td>
                      <td className="p-4">
                        <Badge variant={student.status === "Ativo" ? "default" : "secondary"} 
                               className={student.status === "Ativo" ? "bg-success hover:bg-success/90" : ""}>
                          {student.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/10">
                            <Eye className="w-4 h-4" />
                          </Button>
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
