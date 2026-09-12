import { UserRepository } from '../repositories/user.repository';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async login(credentials: any) {
    return { token: 'mock_jwt_token', user: { email: credentials.email } };
  }

  public async register(data: any) {
    return this.userRepository.create(data);
  }
}
