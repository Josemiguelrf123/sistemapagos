import { Role } from './role';

export class UserFirebase {
  id!: string;
  email!: string;
  estatus!: boolean;
  mobile!: string;
  name!: string;
  role!: Role;
}