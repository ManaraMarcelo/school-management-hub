import { NavLink } from "react-router-dom";
import { Home, Users, GraduationCap, School, BookOpen, FileText, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Users, label: "Alunos", path: "/alunos" },
  { icon: GraduationCap, label: "Professores", path: "/professores" },
  { icon: School, label: "Turmas", path: "/turmas" },
  { icon: BookOpen, label: "Disciplinas", path: "/disciplinas" },
  { icon: FileText, label: "Notas", path: "/notas" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-navy text-white min-h-screen flex flex-col">
      <div className="p-6 border-b border-navy-light">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <School className="w-7 h-7 text-navy" />
          </div>
          <div>
            <h1 className="text-xl font-bold">School</h1>
            <p className="text-xs text-blue-300">Sistema de Gestão</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-navy-light hover:text-white transition-colors",
                isActive && "bg-primary text-white font-medium"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-6 border-t border-navy-light">
        <button className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-navy-light hover:text-white transition-colors rounded w-full">
          <LogOut className="w-5 h-5" />
          <span>Sair</span>
        </button>
        <div className="mt-4 text-xs text-white/50 text-center">
          #1E3A5F
        </div>
      </div>
    </aside>
  );
}
