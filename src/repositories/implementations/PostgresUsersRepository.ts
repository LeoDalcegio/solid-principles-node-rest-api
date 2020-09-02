import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = (await this.users.find(
      (user) => user.email === email
    )) as User;

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
