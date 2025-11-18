// ============================================
// CONFIGURAÇÃO DA API
// ============================================
// TODO: Altere esta URL para o endereço do seu backend Spring Boot
// Exemplo: http://localhost:8080 (porta padrão do Spring Boot)
export const API_BASE_URL = "http://localhost:8080";

// ============================================
// HEADERS PADRÃO PARA REQUISIÇÕES
// ============================================
export const getHeaders = () => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  // TODO: Após implementar autenticação, descomente e ajuste conforme seu backend
  // const token = localStorage.getItem("authToken");
  // if (token) {
  //   headers["Authorization"] = `Bearer ${token}`;
  // }

  return headers;
};

// ============================================
// FUNÇÃO AUXILIAR PARA TRATAR ERROS
// ============================================
export const handleApiError = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Erro ${response.status}: ${response.statusText}`);
  }
  return response;
};
