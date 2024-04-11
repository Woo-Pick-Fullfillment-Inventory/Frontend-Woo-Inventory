export interface SigninPayload {
  emailOrUsername: string;
  password: string;
}

export interface SignupPayload {
  appURL: string;
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
  token: string;
}
