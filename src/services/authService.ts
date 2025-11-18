import { API_BASE_URL, getHeaders, handleApiError } from "@/lib/api";

// ============================================
// TIPOS DE DADOS
// ============================================
export interface LoginCredentials {
  username: string;
  senha: string;
}

export interface LoginResponse {
  // TODO: Ajuste conforme a resposta do seu backend
  // Exemplo: token, usuario, etc.
  token?: string;
  username?: string;
  role?: string;
}

// ============================================
// SERVIÇO DE AUTENTICAÇÃO
// ============================================

/**
 * TODO: Integração com POST /api/auth/login
 * Realiza login no sistema
 */
export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  // TODO: Descomente e ajuste quando o backend estiver pronto
  /*
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(credentials),
  });

  await handleApiError(response);
  const data = await response.json();

  // Salvar token no localStorage se o backend retornar
  if (data.token) {
    localStorage.setItem("authToken", data.token);
  }

  return data;
  */

  // MOCK - Remover quando integrar com backend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "mock-token-123",
        username: credentials.username,
        role: "ADMIN",
      });
    }, 1000);
  });
};

/**
 * Realiza logout do sistema
 */
export const logout = () => {
  // TODO: Se necessário, chamar endpoint de logout no backend
  localStorage.removeItem("authToken");
};

/**
 * Verifica se o usuário está autenticado
 */
export const isAuthenticated = (): boolean => {
  // TODO: Implementar validação de token se necessário
  return localStorage.getItem("authToken") !== null;
};
