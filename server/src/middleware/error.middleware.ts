import { AppError } from '../utils/errors';
import { ResponseUtil } from '../utils/response';

export function errorMiddleware(err: any, req: any, res: any, next: any) {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err.message || 'Internal Server Error';

  return ResponseUtil.error(message, { statusCode });
}
