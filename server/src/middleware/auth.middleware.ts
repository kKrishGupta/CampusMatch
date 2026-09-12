import { UnauthorizedError } from '../utils/errors';

export function authMiddleware(req: any, res: any, next: any) {
  const authHeader = req.headers?.authorization;
  if (!authHeader) {
    throw new UnauthorizedError('Authentication token missing');
  }
  req.user = { id: 'usr-1', email: 'student@example.com' };
  next();
}
