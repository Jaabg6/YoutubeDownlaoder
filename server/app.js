const { sendUrl } = require("./api");
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  allowEIO3: true, // false by default
});

io.on("connection", (socket) => {
  console.log("conectado en backend");
  socket.emit("event-frontend");

  socket.on("sendUrl", (idUrl) => {

      var urlForDownload = await sendUrl(idUrl);

      console.log(urlForDownload);
      

        var videoInfo = {
          title: urlForDownload.videoInfo.title,
          duration: urlForDownload.videoInfo.duration,
          thumbnails: urlForDownload.videoInfo.thumbnails,
        };

        socket.emit("infoVideo", videoInfo);
        socket.emit("urlDownload", urlForDownload.link);
    
  });

});



function videoNoFound(){
  socket.emit("VideoNoEncontrado");
}


module.exports = {
  app,
  server,
  videoNoFound
};
