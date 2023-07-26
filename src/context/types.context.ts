export interface User {
  name: string;
  location?: string;
  auth_level: 1 | 2 | 3;
}

export interface AuthContextType {
  login: (
    email: string,
    password: string,
    callback: VoidFunction
  ) => Promise<void>;
  logout: (callback: VoidFunction) => Promise<void>;
  user: User | undefined;
}
