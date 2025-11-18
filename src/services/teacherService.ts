import { API_BASE_URL, getHeaders, handleApiError } from "@/lib/api";

// ============================================
// TIPOS DE DADOS - Professor
// ============================================
export interface Teacher {
  id: number;
  nome: string;
  email: string;
}

export interface CreateTeacherDTO {
  nome: string;
  email: string;
}

export interface UpdateTeacherDTO {
  nome?: string;
  email?: string;
}

// ============================================
// SERVIÇO DE PROFESSORES
// ============================================

/**
 * TODO: Integração com GET /api/professores
 * Lista todos os professores cadastrados
 */
export const getAllTeachers = async (): Promise<Teacher[]> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/professores`, {
    method: "GET",
    headers: getHeaders(),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return [
    { id: 1, nome: "Prof. João Santos", email: "joao.santos@escola.com" },
    { id: 2, nome: "Prof. Maria Silva", email: "maria.silva@escola.com" },
  ];
};

/**
 * TODO: Integração com GET /api/professores/{id}
 * Busca um professor específico por ID
 */
export const getTeacherById = async (id: number): Promise<Teacher> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/professores/${id}`, {
    method: "GET",
    headers: getHeaders(),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id, nome: "Professor Mock", email: "mock@escola.com" };
};

/**
 * TODO: Integração com POST /api/professores
 * Cadastra um novo professor
 */
export const createTeacher = async (teacher: CreateTeacherDTO): Promise<Teacher> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/professores`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(teacher),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id: Date.now(), ...teacher };
};

/**
 * TODO: Integração com PUT /api/professores/{id}
 * Atualiza os dados de um professor existente
 */
export const updateTeacher = async (id: number, teacher: UpdateTeacherDTO): Promise<Teacher> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/professores/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(teacher),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id, nome: teacher.nome || "", email: teacher.email || "" };
};

/**
 * TODO: Integração com DELETE /api/professores/{id}
 * Exclui um professor existente
 */
export const deleteTeacher = async (id: number): Promise<void> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/professores/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  await handleApiError(response);
  */

  // MOCK - Remover quando integrar com backend
  console.log(`Professor ${id} excluído (mock)`);
};
