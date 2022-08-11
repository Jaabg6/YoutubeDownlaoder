const { sendUrl } = require("./api");
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  allowEIO3: true, // false by default
});

io.on("connection", (socket) => {
  console.log("conectado en backend");
  // socket.emit("event-frontend");

  socket.on("sendUrl", (idUrl) => {

    findVideo(idUrl, socket)

  });

});

async function findVideo(idUrl, socket) {
  var dataVideo = await sendUrl(idUrl, socket);
  socket.emit("infoVideo", dataVideo);
}




module.exports = {
  app,
  server
};
