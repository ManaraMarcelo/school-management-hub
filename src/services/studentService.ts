import { API_BASE_URL, getHeaders, handleApiError } from "@/lib/api";

// ============================================
// TIPOS DE DADOS - Aluno
// ============================================
export interface Student {
  id: number;
  nome: string;
  matricula: string;
  email: string;
}

export interface CreateStudentDTO {
  nome: string;
  matricula: string;
  email: string;
}

export interface UpdateStudentDTO {
  nome?: string;
  matricula?: string;
  email?: string;
}

// ============================================
// SERVIÇO DE ALUNOS
// ============================================

/**
 * TODO: Integração com GET /api/alunos
 * Lista todos os alunos cadastrados
 */
export const getAllStudents = async (): Promise<Student[]> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/alunos`, {
    method: "GET",
    headers: getHeaders(),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return [
    { id: 1, nome: "Ana Paula Silva", matricula: "2024001", email: "ana.silva@escola.com" },
    { id: 2, nome: "Bruno Costa Lima", matricula: "2024002", email: "bruno.lima@escola.com" },
    { id: 3, nome: "Carla Souza Dias", matricula: "2024003", email: "carla.dias@escola.com" },
  ];
};

/**
 * TODO: Integração com GET /api/alunos/{id}
 * Busca um aluno específico por ID
 */
export const getStudentById = async (id: number): Promise<Student> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/alunos/${id}`, {
    method: "GET",
    headers: getHeaders(),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id, nome: "Aluno Mock", matricula: "2024999", email: "mock@escola.com" };
};

/**
 * TODO: Integração com POST /api/alunos
 * Cadastra um novo aluno
 */
export const createStudent = async (student: CreateStudentDTO): Promise<Student> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/alunos`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(student),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id: Date.now(), ...student };
};

/**
 * TODO: Integração com PUT /api/alunos/{id}
 * Atualiza os dados de um aluno existente
 */
export const updateStudent = async (id: number, student: UpdateStudentDTO): Promise<Student> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/alunos/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(student),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id, nome: student.nome || "", matricula: student.matricula || "", email: student.email || "" };
};

/**
 * TODO: Integração com DELETE /api/alunos/{id}
 * Exclui um aluno existente
 */
export const deleteStudent = async (id: number): Promise<void> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/alunos/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  await handleApiError(response);
  */

  // MOCK - Remover quando integrar com backend
  console.log(`Aluno ${id} excluído (mock)`);
};
