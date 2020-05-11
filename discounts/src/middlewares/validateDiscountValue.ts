import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';

export default function validateDiscountValue(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { value } = request.body;

  if (!value) {
    throw new AppError('Discount value is missing.', 400);
  }

  if (!Number.isInteger(value)) {
    throw new AppError('Discount name must be an integer.', 400);
  }

  if (!(value > 0)) {
    throw new AppError('Discount name must be positive.', 400);
  }

  return next();
}
