export interface SigninPayload {
  email_or_username: string;
  password: string;
}

export interface SignupPayload {
  appURL: string;
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
  token: string;
}
