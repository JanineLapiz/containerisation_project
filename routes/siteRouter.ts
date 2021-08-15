import express, { NextFunction, Request, Response } from "express";
import * as path from "path";

const router = express.Router();
const viewsPath = path.join(__dirname, "../..", "views");

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("/" + req.method);
  next();
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(`${viewsPath}/index.html`);
});

router.get("/sharks", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(`${viewsPath}/sharks.html`);
});

export const siteRouter = router;
