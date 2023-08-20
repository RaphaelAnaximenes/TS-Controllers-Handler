import { Request, Response } from 'express';

export function apiController(req: Request, res: Response) {
  res.status(200).send("Listens w/ status 200 from API");
}