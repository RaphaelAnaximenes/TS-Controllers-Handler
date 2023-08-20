import { Request, Response } from 'express';

export function menuController(req: Request, res: Response) {
  res.status(200).send("Listens w/ status 200 from MENU");
}