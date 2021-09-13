// const puppeteer = require("puppeteer");
// "puppeteer": "^10.2.0",
const axios = require("axios");

const ytdl = require("ytdl-core");

async function sendUrl(idUrl) {
  // const pagescrape = `https://www.y2meta.com/youtube-to-mp3/${idUrl}`;
  const videoInfo = ytdl.getInfo(idUrl).then((info) => {
    // console.log(info.videoDetails);
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
  });

  const link = await axios
    .get(
      "https://mhankbarbar.herokuapp.com/api/yta?url=https://youtu.be/f5aDUB1NCnk"
    )
    .then(function (response) {
      // handle success

      return response.data.result;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  // console.log(link);
  // const browser = await puppeteer.launch({
  //   headless: false,
  //   args: ["--no-sandbox"],
  // });
  // const page = await browser.newPage();
  // await page.goto(pagescrape);

  // await page.waitForSelector("#process_mp3");

  // await page.click("#process_mp3");

  // const downloadButton = await page
  //   .waitForSelector(".btn-download-link", { waitUntil: "load" })
  //   .catch((error) => {
  //     browser.close();
  //     return "error";
  //   });
  // if (downloadButton === "error") return;
  // // console.log(buttonDownload);

  // const link = await page.evaluate(() => {
  //   const urlVideo = document.querySelector(".btn-download-link").href;
  //   const customisedElement = urlVideo.replace("y2meta.com", "Jabibi");
  //   return customisedElement;
  // });

  // await browser.close();

  return { link, videoInfo };

  //   await page.screenshot({ path: "example.png" });
}

// async function sendUrlVideo(idUrl) {
//   const videoInfo = ytdl.getInfo(idUrl).then((info) => {
//     // console.log(info.videoDetails);
//     //   titleVideo = info.videoDetails.title + ".mp3"
//     var title = info.videoDetails.title;
//     var duration = info.videoDetails.lengthSeconds;
//     var thumbnails = info.videoDetails.thumbnails;
//     var infosend = {
//       title,
//       duration,
//       thumbnails,
//     };

//     return infosend;
//   });
//   const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
//   const page = await browser.newPage();
//   await page.goto(`https://www.y2meta.com/converter-youtube/${idUrl}`);

//   await page.waitForSelector("#moretab", { timeout: 5000 });

//   // await page.click("#process_mp3");
//   // await page.waitForSelector(".btn-download-link");

//   const link = await page.evaluate(() => {
//     try {
//       const urlVideo = document.querySelector("#moretab").innerHTML;
//       const customisedElement = urlVideo.replace("y2meta.com", "Jabibi");
//       return customisedElement;
//     } catch (err) {
//       console.log(err);
//       const error = document.querySelector(".alert-danger").innerHTML;
//       return error;
//     }
//   });

//   await browser.close();

//   return { link, videoInfo };

//   //   await page.screenshot({ path: "example.png" });
// }

module.exports = {
  sendUrl,
  // , sendUrlVideo
};
