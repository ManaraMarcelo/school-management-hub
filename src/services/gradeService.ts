import { API_BASE_URL, getHeaders, handleApiError } from "@/lib/api";

// ============================================
// TIPOS DE DADOS - Nota
// ============================================
export interface Grade {
  id: number;
  alunoId: number;
  disciplinaId: number;
  valor: number;
  dataLancamento: string; // ISO date string
}

export interface CreateGradeDTO {
  alunoId: number;
  disciplinaId: number;
  valor: number;
  dataLancamento?: string;
}

export interface UpdateGradeDTO {
  valor?: number;
  dataLancamento?: string;
}

// ============================================
// SERVIÇO DE NOTAS
// ============================================

/**
 * TODO: Integração com POST /api/notas
 * Lança uma nova nota
 */
export const createGrade = async (grade: CreateGradeDTO): Promise<Grade> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/notas`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(grade),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return {
    id: Date.now(),
    ...grade,
    dataLancamento: grade.dataLancamento || new Date().toISOString(),
  };
};

/**
 * TODO: Integração com GET /api/notas/aluno/{alunoId}
 * Lista todas as notas de um aluno
 */
export const getGradesByStudent = async (alunoId: number): Promise<Grade[]> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/notas/aluno/${alunoId}`, {
    method: "GET",
    headers: getHeaders(),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return [
    {
      id: 1,
      alunoId,
      disciplinaId: 1,
      valor: 8.5,
      dataLancamento: new Date().toISOString(),
    },
    {
      id: 2,
      alunoId,
      disciplinaId: 2,
      valor: 9.0,
      dataLancamento: new Date().toISOString(),
    },
  ];
};

/**
 * TODO: Se o backend implementar, integração com PUT /api/notas/{id}
 * Atualiza uma nota existente
 */
export const updateGrade = async (id: number, grade: UpdateGradeDTO): Promise<Grade> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/notas/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(grade),
  });

  await handleApiError(response);
  return await response.json();
  */

  // MOCK - Remover quando integrar com backend
  return {
    id,
    alunoId: 1,
    disciplinaId: 1,
    valor: grade.valor || 0,
    dataLancamento: grade.dataLancamento || new Date().toISOString(),
  };
};

/**
 * TODO: Se o backend implementar, integração com DELETE /api/notas/{id}
 * Exclui uma nota
 */
export const deleteGrade = async (id: number): Promise<void> => {
  // TODO: Descomente quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/notas/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  await handleApiError(response);
  */

  // MOCK - Remover quando integrar com backend
  console.log(`Nota ${id} excluída (mock)`);
};
