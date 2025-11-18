import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const teachers = [
  { id: 1, name: "Prof. João Santos", subjects: "Matemática, Física", cpf: "E-mail", phone: "Telefone", status: "Ativo" },
  { id: 2, name: "Prof. Maria Silva", subjects: "Matemática, Física", cpf: "Statail", phone: "Telefone", status: "Inativo" },
  { id: 3, name: "Prof. Pedro Costa", subjects: "Matemática, Física", cpf: "Status", phone: "Telefone", status: "Ativo" },
  { id: 4, name: "Prof. Ana Oliveira", subjects: "Matemática, Física", cpf: "Status", phone: "Telefone", status: "Ativo" },
  { id: 5, name: "Prof. Carlos Souza", subjects: "Matemática, Física", cpf: "Status", phone: "Telefone", status: "Inativo" },
];

export default function Teachers() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <Header title="Gerenciar Professores" />
      
      <main className="flex-1 p-8">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Buscar professor..." 
              className="pl-10"
            />
          </div>
          <Select defaultValue="todos">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filtrar por Disciplina" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todas Disciplinas</SelectItem>
              <SelectItem value="matematica">Matemática</SelectItem>
              <SelectItem value="fisica">Física</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            Status: Todos
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Novo Professor
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
                    <th className="text-left p-4 font-medium text-muted-foreground">Disciplinas</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">CPF</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Telefone</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher, index) => (
                    <tr key={teacher.id} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4">{teacher.id}</td>
                      <td className="p-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            P{index + 1}
                          </AvatarFallback>
                        </Avatar>
                      </td>
                      <td className="p-4 font-medium">{teacher.name}</td>
                      <td className="p-4 text-muted-foreground text-sm">{teacher.subjects}</td>
                      <td className="p-4 text-muted-foreground text-sm">{teacher.cpf}</td>
                      <td className="p-4 text-muted-foreground text-sm">{teacher.phone}</td>
                      <td className="p-4">
                        <Badge variant={teacher.status === "Ativo" ? "default" : "secondary"}
                               className={teacher.status === "Ativo" ? "bg-success hover:bg-success/90" : ""}>
                          {teacher.status}
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
