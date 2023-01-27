import { Request, Response } from "express";

const userController = (_req: Request, res: Response) => {
  res.json('working')
}

export default userController