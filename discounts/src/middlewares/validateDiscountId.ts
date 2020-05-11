import { Request, Response, NextFunction } from 'express';
import { isUuid } from 'uuidv4';

import AppError from '../errors/AppError';

export default function validateDiscountId(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { id } = request.params;

  if (!id) {
    throw new AppError('Discount ID is missing.', 400);
  }

  if (!isUuid(id)) {
    throw new AppError('Discount ID is not an uuid.', 400);
  }

  return next();
}
