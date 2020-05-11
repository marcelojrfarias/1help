import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';

export default function validateDiscountType(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { type } = request.body;

  if (!type) {
    throw new AppError('Discount type is missing.', 400);
  }

  if (!(typeof type === 'string' || type instanceof String)) {
    throw new AppError('Discount type must be a string.', 400);
  }

  if (!(type === 'absolute' || type === 'percentage')) {
    throw new AppError(
      "Discount type must be 'absolute' or 'percentage'.",
      400,
    );
  }

  return next();
}
