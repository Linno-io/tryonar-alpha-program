const API_BASE_URL = 'https://api.tryonar.net';

interface RegisterUserResponse {
  data: {
    id: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  };
}

export async function registerUser(email: string, password: string): Promise<RegisterUserResponse['data']> {
  const nameFromEmail = email.split('@')[0] || email;

  const response = await fetch(`${API_BASE_URL}/api/v1/auth/user/register`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: nameFromEmail,
      email,
      password,
      role: 'admin',
      status: 'pending',
      parentUserId: null,
      currentStoreId: null,
    }),
  });

  if (!response.ok) {
    const message = `Registration failed (${response.status})`;
    throw new Error(message);
  }

  const json = (await response.json()) as RegisterUserResponse;
  return json.data;
}

export async function fetchWithAuth(input: string, init: RequestInit = {}, accessTokenOverride?: string) {
  const token = accessTokenOverride || localStorage.getItem('accessToken');

  const headers = new Headers(init.headers || {});
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const url = input.startsWith('http') ? input : `${API_BASE_URL}${input}`;

  return fetch(url, {
    ...init,
    headers,
  });
}


