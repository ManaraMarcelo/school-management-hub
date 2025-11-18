import { API_BASE_URL, getHeaders, handleApiError } from "@/lib/api";

// ============================================
// TIPOS DE DADOS - Turma
// ============================================
export interface Class {
  id: number;
  nome: string;
  anoLetivo: number;
  turno: string;
}

export interface CreateClassDTO {
  nome: string;
  anoLetivo: number;
  turno: string;
}

export interface UpdateClassDTO {
  nome?: string;
  anoLetivo?: number;
  turno?: string;
}

// ============================================
// SERVIÇO DE TURMAS
// ============================================

/**
 * TODO: Integração com GET /api/turmas
 * Lista todas as turmas cadastradas
 */
export const getAllClasses = async (): Promise<Class[]> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/turmas`, {
    method: "GET",
    headers: getHeaders(),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return [
    { id: 1, nome: "9º Ano A", anoLetivo: 2025, turno: "Matutino" },
    { id: 2, nome: "9º Ano B", anoLetivo: 2025, turno: "Vespertino" },
  ];
};

/**
 * TODO: Integração com GET /api/turmas/{id}
 * Busca uma turma específica por ID
 */
export const getClassById = async (id: number): Promise<Class> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/turmas/${id}`, {
    method: "GET",
    headers: getHeaders(),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id, nome: "Turma Mock", anoLetivo: 2025, turno: "Matutino" };
};

/**
 * TODO: Integração com POST /api/turmas
 * Cadastra uma nova turma
 */
export const createClass = async (classData: CreateClassDTO): Promise<Class> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/turmas`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(classData),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id: Date.now(), ...classData };
};

/**
 * TODO: Integração com PUT /api/turmas/{id}
 * Atualiza os dados de uma turma existente
 */
export const updateClass = async (id: number, classData: UpdateClassDTO): Promise<Class> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/turmas/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(classData),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return { id, nome: classData.nome || "", anoLetivo: classData.anoLetivo || 2025, turno: classData.turno || "" };
};

/**
 * TODO: Integração com DELETE /api/turmas/{id}
 * Exclui uma turma existente
 */
export const deleteClass = async (id: number): Promise<void> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/turmas/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  await handleApiError(response);
  */

  // MOCK - Remover quando integrar com backend
  console.log(`Turma ${id} excluída (mock)`);
};
