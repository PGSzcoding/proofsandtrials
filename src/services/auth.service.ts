import { ENV } from "../config/env";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  email: string;
}

export async function login({ email,password,}: LoginRequest): Promise<LoginResponse> {

  const response = await fetch(`${ENV.API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({email,password}),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Error al iniciar sesión");
  }
  
  return data;
}