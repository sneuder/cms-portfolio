import { Request, Response } from "express";

const itemController = (_req: Request, res: Response) => {
  res.json('working')
}

export default itemController