import { User } from './../../users/user.entity';
export default class TestUtil {
  static giveAMeAValidUser(): User {
    const user = new User();
    user.email = 'valid@email.com';
    user.name = 'Angelo Luz';
    user.id = '1';
    return user;
  }
}
