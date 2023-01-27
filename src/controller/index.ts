import { Request, Response } from "express";

const controller = (_req: Request, res: Response) => {
  res.json('working')
}

export default controller