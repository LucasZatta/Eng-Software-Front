export interface User {
  name: string;
  cpf: string;
  phone: string;
  type: user_type[];
  password: string;
  email: string;
}

export enum user_type {
  OWNER = "owner",
  RENTER = "renter",
}

export interface UserInitialState {
  currentUser: User | null;
  error: string | null;
}
