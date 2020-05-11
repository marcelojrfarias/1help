import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';

export default function validateDiscountName(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { name } = request.body;

  if (!name) {
    throw new AppError('Discount name is missing.', 400);
  }

  if (!(typeof name === 'string' || name instanceof String)) {
    throw new AppError('Discount name must be a string.', 400);
  }

  return next();
}
