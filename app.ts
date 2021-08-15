import express, { Request, Response } from "express";
import {siteRouter} from './routes/siteRouter'
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/views`))
app.use('/', siteRouter);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to this site! :D");
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
