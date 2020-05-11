import { Request, Response, NextFunction } from 'express';
import { isUuid } from 'uuidv4';

import AppError from '../errors/AppError';

export default function validateUserId(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { user_id } = request.body;

  if (!user_id) {
    throw new AppError('User ID is missing.', 400);
  }

  if (!isUuid(user_id)) {
    throw new AppError('User ID is not an uuid.', 400);
  }

  return next();
}
