export interface User {
  user_email: string;
  user_id: string;
  user_name: string;
  user_surname: string;
  is_admin: boolean;
  user_company: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
