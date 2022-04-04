import express, { json, Request, Response } from "express";
import { config } from "./config";

const app = express();
app.use(json());

app.use("/test", async (req: Request, res: Response) => {});

app.listen(config.app.port, () => {
    console.log("Server running on port: ", config.app.port);
});
