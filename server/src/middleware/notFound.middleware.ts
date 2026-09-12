import { NotFoundError } from '../utils/errors';

export function notFoundMiddleware(req: any, res: any) {
  throw new NotFoundError(`Route ${req.originalUrl || req.url} not found`);
}
