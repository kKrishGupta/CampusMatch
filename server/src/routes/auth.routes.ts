import { AuthController } from '../controllers/auth.controller';

export function setupAuthRoutes() {
  const controller = new AuthController();
  return {
    login: (req: any, res: any) => controller.login(req, res),
    register: (req: any, res: any) => controller.register(req, res),
  };
}
