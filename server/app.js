const { sendUrl } = require("./puppeteer-process");
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  allowEIO3: true, // false by default
});

io.on("connection", (socket) => {
  console.log("conectado en backend");
  socket.emit("event-frontend");

  socket.on("sendUrl", (idUrl) => {
    // console.log(url);
    async function send() {
      var urlForDownload = await sendUrl(idUrl);
      console.log(urlForDownload);
      // console.log(urlForDownload.link);
      // console.log(urlForDownload.InfoVideo.title);
      // console.log(urlForDownload.InfoVideo.duration);
      // console.log(urlForDownload.InfoVideo.thumnail);
      var videoInfo = {
        title: (await urlForDownload.videoInfo).title,
        duration: (await urlForDownload.videoInfo).duration,
        thumbnails: (await urlForDownload.videoInfo).thumbnails,
      };
      // console.log((await urlForDownload.videoInfo).title);
      socket.emit("infoVideo", videoInfo);

      socket.emit("urlDownload", urlForDownload.link);
    }
    send();
  });
});

module.exports = {
  app,
  server,
};
