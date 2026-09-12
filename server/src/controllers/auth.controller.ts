import { AuthService } from '../services/auth.service';
import { ResponseUtil } from '../utils/response';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async login(req: any, res: any) {
    const result = await this.authService.login(req.body);
    return ResponseUtil.success(result, 'Login successful');
  }

  public async register(req: any, res: any) {
    const result = await this.authService.register(req.body);
    return ResponseUtil.success(result, 'Registration successful');
  }
}
