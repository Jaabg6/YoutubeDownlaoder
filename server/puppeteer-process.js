const puppeteer = require("puppeteer");
const ytdl = require("ytdl-core");

async function sendUrl(idUrl) {
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
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`https://www.y2meta.com/youtube-to-mp3/${idUrl}`);

  // await page.waitForSelector(".video-thumbnail");
  // await page.waitForSelector(".caption");

  // const InfoVideo = await page.evaluate(() => {
  //   const thumnail = document
  //     .querySelector(".video-thumbnail img")
  //     .getAttribute("src");
  //   const title = document.querySelector(".caption b").innerText;
  //   const duration = document.querySelector(".caption p").innerText;
  //   VideoInfo = {
  //     thumnail,
  //     title,
  //     duration,
  //   };
  //   return VideoInfo;
  // });

  await page.waitForSelector("#process_mp3");

  await page.click("#process_mp3");
  await page.waitForSelector(".btn-download-link");

  //   await page.click(".btn-download-link");

  const link = await page.evaluate(() => {
    const urlVideo = document.querySelector(".btn-download-link").href;
    const customisedElement = urlVideo.replace("y2meta.com", "Jabibi");
    return customisedElement;
  });

  // console.log(link);

  await browser.close();

  return { link, videoInfo };

  //   await page.screenshot({ path: "example.png" });
}

module.exports = { sendUrl };
