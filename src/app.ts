import express, { json, Request, Response } from "express";
import xmlParser from "express-xml-bodyparser";

const app = express();
app.use(json());

app.use(xmlParser());

app.post("/test", (req: Request, res: Response) => {
    console.log({ test: req.body });
    res.end();
});
app.post("/notification_url", (req: Request, res: Response) => {
    console.log({ notification_url: req.body });
    res.end();
});

export default app;
