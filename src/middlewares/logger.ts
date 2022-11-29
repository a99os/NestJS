import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`VAQTI- ${new Date()} Methodi: ${req.method}  Url${req.url}`);
  next();
}
