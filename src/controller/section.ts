import { Request, Response } from "express";

const sectionController = (_req: Request, res: Response) => {
  res.json('working')
}

export default sectionController