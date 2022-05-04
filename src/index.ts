import { createServer } from "http";
import app from "./app";
import config from "./config";
import { createConnection } from "./db/connection";
import socket from "./socket";




createConnection().then(() => {
    console.log("💾 Database connected");

    const server = createServer(app);

    socket(server);

    server.listen(config.port, () => {
        console.log(`🚀 Server ON: http://localhost:${config.port}`);
    });
});