  const puppeteer = require("puppeteer");
// "puppeteer": "^10.2.0",
 const cheerio = require('cheerio');
// "puppeteer": "^10.2.0",
const axios = require("axios");

const ytdl = require("ytdl-core");

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

//initialize the puppeteer browser
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
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.goto(`https://api.vevioz.com/api/button/mp3/${idUrl}`);
  //sleep for 2 seconds
  await page.waitForSelector("body > div > div > div > div")
  await delay(2000);
  //get the all  href of buttons
  const link = await page.evaluate(() => {
    AllHref = [];
    
    const buttons = Array.from(document.querySelectorAll("body > div > div > div > div > a"));
    buttons.forEach(button => {
      AllHref.push(button.href)
      }
    )
    return AllHref;
    }
  );
  console.log(link);

  
  // sendUrl(idUrl);
  // await browser.close();
  return { link, videoInfo };

};




// async function sendUrl(idUrl) {
//   // const pagescrape = `https://www.y2meta.com/youtube-to-mp3/${idUrl}`;
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

  

//   // `https://www.yt-download.org/api/button/mp3/${idUrl}`

//   // body > div.container.mx-auto.lg\:px-16.py-4.pb-0 > div > div > div > a:nth-child(1) > div:nth-child(4)
//      const link = await axios
//        .get(
//          `https://api.vevioz.com/api/button/mp3/${idUrl}`
//        )
//        .then(function (response) {
//          let $ = cheerio.load(response.data);
//          var AllLinks = []
//         $('a').each(function (i, e) {
//           // let size = $(e).contents().text()
//           //  console.log(size)
//           //  console.log(links);
//           let links = $(e).attr('href');
//           if(links.includes("vevioz.com/download/")){
//             AllLinks.push(links);
//           }
          


//       })

//       console.log(AllLinks)
//       return AllLinks;
//         //  const bro = response.data
//         // console.log(bro)
//         //  return response.data.result;
//        })
//        .catch(function (error) {
//          // handle error
//          console.log(error);
//        });

      


//   //  console.log(link);
//     //  const browser = await puppeteer.launch({
//     //    headless: false,
//     //    args: ["--no-sandbox"],
//     //  });
//     //  const page = await browser.newPage();
//     //  await page.goto(`https://www.yt-download.org/api/button/mp3/${idUrl}`);
//     //  //  await page.waitForSelector("body > div > div > div > div > a:nth-child(1)")
//     //  const downloadButton = await page
//     //    .waitForSelector("body > div > div > div > div > a:nth-child(1)")
//     //    .catch((error) => {
//     //      browser.close();
//     //      return "error";
//     //    });
//     //  if (downloadButton === "error") return;
//     //  // console.log(buttonDownload);
//     //  const link = await page.evaluate(() => {
//     //    const urlVideo = document.querySelector("body > div > div > div > div > a:nth-child(1)").href;
//     //   //  const customisedElement = urlVideo.replace("y2meta.com", "Jabibi");
//     //    return urlVideo;
//     //  });
//     //  await browser.close();

//   return { link, videoInfo };

//   //   await page.screenshot({ path: "example.png" });
// }

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
