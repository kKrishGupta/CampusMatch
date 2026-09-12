import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { ResponseUtil } from '../utils/response';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async login(req: Request, res: Response) {
    try {
      const result = await this.authService.login(req.body);
      return res.status(200).json(ResponseUtil.success(result, 'Login successful'));
    } catch (err: any) {
      return res.status(400).json(ResponseUtil.error(err.message || 'Login failed'));
    }
  }

  public async register(req: Request, res: Response) {
    try {
      const result = await this.authService.register(req.body);
      return res.status(201).json(ResponseUtil.success(result, 'Registration successful'));
    } catch (err: any) {
      return res.status(400).json(ResponseUtil.error(err.message || 'Registration failed'));
    }
  }
}
