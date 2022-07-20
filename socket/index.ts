require("dotenv").config();
import {Server} from "socket.io";

const io = new Server({
    cors: {
        origin: process.env.FRONTEND_URL,
    }
});

io.on("connection", (socket) => {
});
io.listen(Number(process.env.NODE_DOCKER_PORT));