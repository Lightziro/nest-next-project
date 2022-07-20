"use strict";
exports.__esModule = true;
require("dotenv").config();
var socket_io_1 = require("socket.io");
var io = new socket_io_1.Server({
    cors: {
        origin: process.env.FRONTEND_URL
    }
});
io.on("connection", function (socket) {
});
io.listen(Number(process.env.NODE_DOCKER_PORT));
