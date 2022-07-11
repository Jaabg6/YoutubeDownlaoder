const { sendUrl } = require("./puppeteer-process");
const axios = require("axios");
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  allowEIO3: true, // false by default
});

io.on("connection", (socket) => {
  console.log("conectado en backend");
  socket.emit("event-frontend");

  //   axios({
  //     url: 'http://api.dev/file-download', //your url
  //     method: 'GET',
  //     responseType: 'blob', // important
  // }).then((response) => {
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', 'file.pdf'); //or any other extension
  //     document.body.appendChild(link);
  //     link.click();
  // });

  socket.on("sendUrl", (idUrl) => {
    // console.log(url);
    async function send() {
      var urlForDownload = await sendUrl(idUrl);

      console.log(urlForDownload);
      // console.log(urlForDownload);
      // console.log(urlForDownload.link);
      // console.log(urlForDownload.InfoVideo.title);
      // console.log(urlForDownload.InfoVideo.duration);
      // console.log(urlForDownload.InfoVideo.thumnail);
      // console.log(urlForDownload.videoInfo);
      // console.log((await urlForDownload.videoInfo).title);
      if (urlForDownload) {
        var videoInfo = {
          title: (await urlForDownload.videoInfo).title,
          duration: (await urlForDownload.videoInfo).duration,
          thumbnails: (await urlForDownload.videoInfo).thumbnails,
        };

        socket.emit("infoVideo", videoInfo);

        socket.emit("urlDownload", urlForDownload.link);
      } else {
        socket.emit("VideoNoEncontrado");
      }
    }
    send();
  });
});

module.exports = {
  app,
  server,
};
