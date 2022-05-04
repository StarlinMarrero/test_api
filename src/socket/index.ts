import { Server } from "http";
import ioSocket from "socket.io";

const socket = (server: Server) => {
    try {
        const io = new ioSocket.Server(server, {
            cors: {
                origin: process.env.FRONT_DOMAIN || "http://localhost:3000",
            },
        });

        console.log("🚀 Socket Connected");
    } catch (error) {
        console.log(`🚨 - file: index.ts - line 8 - socket - error`, error);

        return { error: { message: "🚨 Cannot start socket server" } };
    }
};

export default socket;