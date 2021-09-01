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
  const browser = await puppeteer.launch({
    // headless: false,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`https://www.y2meta.com/youtube-to-mp3/${idUrl}`);

  await page.waitForSelector("#process_mp3");

  await page.click("#process_mp3");
  await page.waitForSelector(".btn-download-link");

  const link = await page.evaluate(() => {
    const urlVideo = document.querySelector(".btn-download-link").href;
    const customisedElement = urlVideo.replace("y2meta.com", "Jabibi");
    return customisedElement;
  });

  await browser.close();

  return { link, videoInfo };

  //   await page.screenshot({ path: "example.png" });
}

async function sendUrlVideo(idUrl) {
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
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto(`https://www.y2meta.com/converter-youtube/${idUrl}`);

  await page.waitForSelector("#moretab");

  // await page.click("#process_mp3");
  // await page.waitForSelector(".btn-download-link");

  const link = await page.evaluate(() => {
    const urlVideo = document.querySelector("#moretab").innerHTML;
    const customisedElement = urlVideo.replace("y2meta.com", "Jabibi");
    return customisedElement;
  });

  await browser.close();

  return { link, videoInfo };

  //   await page.screenshot({ path: "example.png" });
}

module.exports = { sendUrl, sendUrlVideo };
