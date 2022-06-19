import { User } from "./user";

export type UserServiceType = {
  findById(id: string): Promise<User>
}