import { API_BASE_URL, getHeaders, handleApiError } from "@/lib/api";

// ============================================
// TIPOS DE DADOS - Disciplina
// ============================================
export interface Subject {
  id: number;
  nome: string;
  cargaHoraria: number;
}

export interface CreateSubjectDTO {
  nome: string;
  cargaHoraria: number;
}

export interface UpdateSubjectDTO {
  nome?: string;
  cargaHoraria?: number;
}

// ============================================
// SERVIÇO DE DISCIPLINAS
// ============================================

/**
 * TODO: Integração com GET /api/disciplinas
 * Lista todas as disciplinas cadastradas
 */
export const getAllSubjects = async (): Promise<Subject[]> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/disciplinas`, {
    method: "GET",
    headers: getHeaders(),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return [
    { id: 1, nome: "Matemática", cargaHoraria: 4 },
    { id: 2, nome: "Português", cargaHoraria: 4 },
    { id: 3, nome: "História", cargaHoraria: 2 },
  ];
};

/**
 * TODO: Integração com GET /api/disciplinas/{id}
 * Busca uma disciplina específica por ID
 */
export const getSubjectById = async (id: number): Promise<Subject> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/disciplinas/${id}`, {
    method: "GET",
    headers: getHeaders(),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id, nome: "Disciplina Mock", cargaHoraria: 4 };
};

/**
 * TODO: Integração com POST /api/disciplinas
 * Cadastra uma nova disciplina
 */
export const createSubject = async (subject: CreateSubjectDTO): Promise<Subject> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/disciplinas`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(subject),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id: Date.now(), ...subject };
};

/**
 * TODO: Integração com PUT /api/disciplinas/{id}
 * Atualiza os dados de uma disciplina existente
 */
export const updateSubject = async (id: number, subject: UpdateSubjectDTO): Promise<Subject> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/disciplinas/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(subject),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id, nome: subject.nome || "", cargaHoraria: subject.cargaHoraria || 0 };
};

/**
 * TODO: Integração com DELETE /api/disciplinas/{id}
 * Exclui uma disciplina existente
 */
export const deleteSubject = async (id: number): Promise<void> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/disciplinas/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  await handleApiError(response);
  */

  // MOCK - Remover quando integrar com backend
  console.log(`Disciplina ${id} excluída (mock)`);
};
