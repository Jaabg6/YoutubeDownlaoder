const path = require('path');
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
}).parsed;

const ytdl = require("ytdl-core");
const axios = require("axios");
const API_KEY = dotenv.API_KEY
const API_HOST = dotenv.API_HOST




//initialize the puppeteer browser
async function sendUrl(idUrl, socket) {

  const options = {
    method: 'GET',
    url: 'https://youtube-mp3-download1.p.rapidapi.com/dl',
    params: {id: idUrl},
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };
  
  const videoInfo = await ytdl.getInfo(idUrl).then((info) => {

    //   titleVideo = info.videoDetails.title + ".mp3"
    var title = info.videoDetails.title;
    var duration = info.videoDetails.lengthSeconds;
    var thumbnails = info.videoDetails.thumbnails;
    var infosend = {
      title,
      duration,
      thumbnails,
    };
    return infosend;
  }).catch((error) => {
    videoNoFound(socket);
    console.log(error)
  })
  
  const link = await axios.request(options).then(function (response) {
  console.log("🚀 ~ file: api.js ~ line 45 ~ link ~ response status", response.data.status)
  console.log("🚀 ~ file: api.js ~ line 46 ~ link ~ response", response.data)
    
    if(response.data.status == "ok"){
      return response.data.link
    }
    else{
      videoNoFound(socket);
    }
  }).catch(function (error) {
    videoNoFound(socket);
    console.log(error)
  });
  
  console.log({ link, videoInfo });
  return { link, videoInfo };

};

async function videoNoFound(socket){
  socket.emit("VideoNoEncontrado");
}

module.exports = {
  sendUrl,
};
