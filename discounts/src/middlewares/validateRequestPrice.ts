import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';

export default function validateRequestPrice(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { price } = request.body;

  if (!price) {
    throw new AppError('Request price is missing.', 400);
  }

  if (!(typeof price === 'number')) {
    throw new AppError('Request name must be a number.', 400);
  }

  if (!(price > 0)) {
    throw new AppError('Request name must be positive.', 400);
  }

  return next();
}
