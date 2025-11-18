# Guia de Integração - Frontend React + Backend Spring Boot

## 📋 Pré-requisitos

1. Backend Spring Boot rodando (geralmente em `http://localhost:8080`)
2. CORS configurado no backend para aceitar requisições do frontend

## 🔧 Passo a Passo para Integração

### 1. Configure a URL Base da API

Abra o arquivo `src/lib/api.ts` e altere a constante `API_BASE_URL`:

```typescript
export const API_BASE_URL = "http://localhost:8080"; // Altere se necessário
```

### 2. Configure o CORS no Backend Spring Boot

No seu backend, adicione a configuração de CORS. Crie uma classe de configuração:

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173", "http://localhost:3000") // URLs do frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

### 3. Integração por Módulo

Para cada módulo, você precisa descomentar as chamadas reais da API e remover os dados MOCK:

#### 📚 Módulo Alunos (`src/services/studentService.ts`)

- `getAllStudents()` → GET `/api/alunos`
- `getStudentById(id)` → GET `/api/alunos/{id}`
- `createStudent(data)` → POST `/api/alunos`
- `updateStudent(id, data)` → PUT `/api/alunos/{id}`
- `deleteStudent(id)` → DELETE `/api/alunos/{id}`

#### 👨‍🏫 Módulo Professores (`src/services/teacherService.ts`)

- `getAllTeachers()` → GET `/api/professores`
- `getTeacherById(id)` → GET `/api/professores/{id}`
- `createTeacher(data)` → POST `/api/professores`
- `updateTeacher(id, data)` → PUT `/api/professores/{id}`
- `deleteTeacher(id)` → DELETE `/api/professores/{id}`

#### 🏫 Módulo Turmas (`src/services/classService.ts`)

- `getAllClasses()` → GET `/api/turmas`
- `getClassById(id)` → GET `/api/turmas/{id}`
- `createClass(data)` → POST `/api/turmas`
- `updateClass(id, data)` → PUT `/api/turmas/{id}`
- `deleteClass(id)` → DELETE `/api/turmas/{id}`

#### 📖 Módulo Disciplinas (`src/services/subjectService.ts`)

- `getAllSubjects()` → GET `/api/disciplinas`
- `getSubjectById(id)` → GET `/api/disciplinas/{id}`
- `createSubject(data)` → POST `/api/disciplinas`
- `updateSubject(id, data)` → PUT `/api/disciplinas/{id}`
- `deleteSubject(id)` → DELETE `/api/disciplinas/{id}`

#### 📊 Módulo Notas (`src/services/gradeService.ts`)

- `createGrade(data)` → POST `/api/notas`
- `getGradesByStudent(alunoId)` → GET `/api/notas/aluno/{alunoId}`
- `updateGrade(id, data)` → PUT `/api/notas/{id}` (se implementado)
- `deleteGrade(id)` → DELETE `/api/notas/{id}` (se implementado)

#### 🔐 Módulo Autenticação (`src/services/authService.ts`)

- `login(credentials)` → POST `/api/auth/login`

### 4. Exemplo de Integração - Alunos

Abra `src/services/studentService.ts` e localize a função `getAllStudents`:

```typescript
// ANTES (com MOCK):
export const getAllStudents = async (): Promise<Student[]> => {
  // MOCK - Remover quando integrar com backend
  return [
    { id: 1, nome: "Ana Paula Silva", matricula: "2024001", email: "ana.silva@escola.com" },
  ];
};

// DEPOIS (integrado):
export const getAllStudents = async (): Promise<Student[]> => {
  const response = await fetch(`${API_BASE_URL}/api/alunos`, {
    method: "GET",
    headers: getHeaders(),
  });

  await handleApiError(response);
  return await response.json();
};
```

### 5. Autenticação com Token (Opcional)

Se seu backend retornar um token JWT no login, descomente as linhas em `src/lib/api.ts`:

```typescript
export const getHeaders = () => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  // Descomente estas linhas:
  const token = localStorage.getItem("authToken");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};
```

### 6. Testando a Integração

1. Inicie o backend Spring Boot
2. Inicie o frontend: `npm run dev`
3. Faça login no sistema
4. Teste cada módulo (listar, criar, editar, excluir)

## 🐛 Solução de Problemas Comuns

### Erro de CORS
- Verifique se o CORS está configurado no backend
- Confirme se a URL do frontend está nas `allowedOrigins`

### Erro 401 (Não Autorizado)
- Verifique se o token está sendo enviado corretamente
- Confirme se o backend valida o token

### Erro 404 (Não Encontrado)
- Verifique se a URL da API está correta em `src/lib/api.ts`
- Confirme se os endpoints do backend estão corretos

### Dados não aparecem
- Abra o DevTools (F12) → Network para ver as requisições
- Verifique se o backend está retornando dados no formato correto (JSON)

## 📝 Checklist de Integração

- [ ] Backend Spring Boot rodando
- [ ] CORS configurado no backend
- [ ] URL base da API configurada em `src/lib/api.ts`
- [ ] Autenticação (login) integrada
- [ ] Módulo Alunos integrado
- [ ] Módulo Professores integrado
- [ ] Módulo Turmas integrado
- [ ] Módulo Disciplinas integrado
- [ ] Módulo Notas integrado
- [ ] Testes realizados em todos os módulos

## 🚀 Próximos Passos

Após a integração básica, considere implementar:

1. **Tratamento de erros** mais robusto com mensagens ao usuário
2. **Loading states** durante as requisições
3. **Validação de formulários** antes de enviar ao backend
4. **Refresh automático** após operações de CRUD
5. **Paginação** para listas grandes
6. **Filtros e busca** avançados

Boa integração! 🎉
