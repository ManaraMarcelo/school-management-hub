import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Search, Minus } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const grades = [
  { 
    id: 1, 
    name: "Ana Paula Silva", 
    p1: "8.5", 
    note2: "9.0", 
    p2: "9.0", 
    work: "8.0", 
    avg: "8.5", 
    status: "Aprovado",
    statusColor: "success"
  },
  { 
    id: 2, 
    name: "Ana Paula Silva", 
    p1: "7.0", 
    note2: "6.5", 
    p2: "6.5", 
    work: "7.5", 
    avg: "7.0", 
    status: "Aprovado",
    statusColor: "success"
  },
  { 
    id: 3, 
    name: "Bruno Costa Lima", 
    p1: "7.0", 
    note2: "6.5", 
    p2: "7.5", 
    work: "7.0", 
    avg: "7.0", 
    status: "Aprovado",
    statusColor: "success"
  },
  { 
    id: 4, 
    name: "Carla Souza Dias", 
    p1: "5.5", 
    note2: "6.0", 
    p2: "7.0", 
    work: "5.5", 
    avg: "5.5", 
    status: "Recuperação",
    statusColor: "warning"
  },
  { 
    id: 5, 
    name: "Carla Souza Dias", 
    p1: "5.5", 
    note2: "6.0", 
    p2: "5.0", 
    work: "5.0", 
    avg: "5.5", 
    status: "Recuperação",
    statusColor: "warning"
  },
  { 
    id: 6, 
    name: "Daniel Oliveira", 
    p1: "4.0", 
    note2: "4.5", 
    p2: "5.0", 
    work: "5.0", 
    avg: "4.5", 
    status: "Reprovado",
    statusColor: "destructive"
  },
];

export default function Grades() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <Header title="Gerenciar Notas" />
      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4 flex-wrap flex-1">
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium mb-2 block">Selecione a Turma</label>
              <Select defaultValue="9a">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a turma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9a">9º Ano A</SelectItem>
                  <SelectItem value="9b">9º Ano B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="mt-7">
                <Minus className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium mb-2 block">Selecione a Disciplina</label>
              <Select defaultValue="mat">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a disciplina" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mat">Matemática</SelectItem>
                  <SelectItem value="fis">Física</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="mt-7">
                <Minus className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium mb-2 block">Bimestre</label>
              <Select defaultValue="1">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o bimestre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1º Bimestre</SelectItem>
                  <SelectItem value="2">2º Bimestre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="mt-7">
              Buscar
            </Button>
          </div>

          <Button className="gap-2 mt-7">
            <Download className="w-4 h-4" />
            Exportar Relatório
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-muted-foreground">Nº</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Nº</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Foto</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Nome do Aluno</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Nota P1</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Nota 2º</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Nota P2</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Trabalho</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Média</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((grade, index) => (
                    <tr key={grade.id} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 text-muted-foreground">{index + 1}</td>
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            {grade.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      </td>
                      <td className="p-4 font-medium">{grade.name}</td>
                      <td className="p-4 text-center">
                        <div className="inline-block px-3 py-1 bg-muted/50 rounded border border-border">
                          {grade.p1}
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="inline-block px-3 py-1 bg-muted/50 rounded border border-border">
                          {grade.note2}
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="inline-block px-3 py-1 bg-muted/50 rounded border border-border">
                          {grade.p2}
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="inline-block px-3 py-1 bg-muted/50 rounded border border-border">
                          {grade.work}
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="inline-block px-3 py-1 bg-muted/50 rounded border border-border font-medium">
                          {grade.avg}
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge 
                          variant="default"
                          className={
                            grade.statusColor === "success" 
                              ? "bg-success hover:bg-success/90" 
                              : grade.statusColor === "warning"
                              ? "bg-warning hover:bg-warning/90"
                              : "bg-destructive hover:bg-destructive/90"
                          }
                        >
                          {grade.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t flex items-center justify-between">
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">#2196F3: 15</span>
                  <span className="text-muted-foreground">Aprovados</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-destructive font-bold">#F4433: 3</span>
                  <span className="text-muted-foreground">Recuperação: 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-warning font-bold">#4AF50: 2</span>
                  <span className="text-muted-foreground">Recovery</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button>Salvar Alterações</Button>
                <Button variant="outline">Cancelar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
