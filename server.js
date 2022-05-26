
const express = require("./config/express.js")
const dotenv = require('dotenv');

// load env variables
dotenv.config({ path: "./config/config.env" });


// run on port defined on /config/config.env file 
// OR if no port specified run on port 5000
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 5000;
 

//establish socket.io connection
const app = express.init();
const server = require("http").createServer(app);


const io = require("socket.io")(server,{
    cors: {
        origin: ['http://localhost:3000',
                'http://localhost:3000/index.html',
                "http://localhost:3000/api/droneData",
                "http://localhost:3000/api/thermal",

                'http://localhost:5000',
                'http://localhost:5000/index.html',
                "http://localhost:5000/api/droneData"
            ],
    },
})

io.of("/api/droneData").on("connection", (socket) => {
    console.log("socket.io: User connected: ", socket.id);

    socket.on("disconnect", () => {
        console.log("socket.io: User disconnected: ", socket.id);
    });
});


exports.SocketEmit = function(data) {
    io.of("/api/droneData").emit("newData", data);
    // io.of("/api/droneData").emit("newData", data);
}


//start the server
server.listen(PORT, () => console.log(`Running on http://${HOST}:${PORT}`));
// server.listen(PORT,HOST, () => console.log(`Running on http://${HOST}:${PORT}`));


