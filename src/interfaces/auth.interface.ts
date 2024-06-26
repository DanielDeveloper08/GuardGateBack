export interface LoginPayloadI {
  username: string;
  password: string;
}

export interface RegisterPayloadI extends LoginPayloadI {
  names: string;
  surnames: string;
  email: string;
  phone?: string;
  roleId: number;
}

export interface UpdatePayloadI extends Omit<RegisterPayloadI, 'password' > {
  id: number;
  personId:number;
  status:boolean;
}

export interface ValidateLoginI {
  username: string;
  code: string;
}

export interface UserTokenPayloadI {
  id: number;
  names: string;
  surnames: string;
  email: string;
  phone: string | null;
  role: string | null;
}

export type RecoverPasswordI = Pick<LoginPayloadI, 'username'>;

export type ResetPasswordI = Pick<LoginPayloadI, 'username'> & {
  newPassword: string;
};

export type UserTokenDecodeI = Record<'data', UserTokenPayloadI> & {
  iat: number;
  exp: number;
};

export interface LoginResponseI {
  token: string;
  user: UserResponseI;
}

export interface UserResponseI extends UserTokenPayloadI {
  operations: Array<string>;
}
