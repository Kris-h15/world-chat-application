const express = require("express");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const path = require("path");

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const port = 3000;
const ROOM = "group";

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("done");
});

// socket.io connection handler ------------------------------
io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("joinRoom", async (username) => {
    console.log(`${username} joined group `);
    await socket.join(ROOM);
    //
    io.to(ROOM).emit("joined msg", username);
    // as the user joins send msg to every connected user included self
    // io.to(ROOM).emit("roomNotice", username);
    // as the user joins send msg to every member excluding self
    socket.to(ROOM).emit("roomNotice", username);
  });

  //handle new message
  socket.on("msg", (msg) => {
    socket.to(ROOM).emit("newmsg", msg);
  });

  // handling typing
  socket.on("typing", (data) => {
    console.log(data);
    socket.to(ROOM).emit("typer name", data);
  });

  // handling not typing
  socket.on("not typing", (user) => {
    socket.to(ROOM).emit("not typing", user);
  });
});

// -----------------------------------------------------------
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
