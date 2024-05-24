enum UserRole {
  Admin,
  USER,
  SupAdmin,
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  userRole: UserRole;
}
