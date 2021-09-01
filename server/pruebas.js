const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`https://www.y2meta.com/converter-youtube/doLMt10ytHY`);

  await page.waitForSelector("#moretab");
  await page.waitForSelector("#moretab tr td");

  //   await page.waitForSelector("[data-fquality=144p]");
  //   await page.click("#moretab tr td button");

  //   await page.click("#moretab tr button")[2];
  // await page.waitForSelector(".btn-download-link");
  //   await page.click("#process_mp3");
  const link = await page.evaluate(() => {
    const lenghtTr = document.querySelectorAll("#moretab tr").length;
    var medium = (lenghtTr / 2).toFixed();
    console.log(lenghtTr);
    // console.log(medium);
    const HQ = document.querySelector("#moretab tr");
    const HQresolution = HQ.querySelector("a").innerText;
    const HQfileSize = HQ.querySelectorAll("td")[1].innerText;
    // const HQbutton = HQ.querySelector("button").innerHTML;
    //   await page.click(HQbutton);

    const MQ = document.querySelectorAll("#moretab tr")[medium];
    const MQresolution = MQ.querySelector("a").innerText;
    const MQfileSize = MQ.querySelectorAll("td")[1].innerText;

    // // const lenghtTr = document.querySelectorAll("#moretab tr").length;
    const arreglo = [];

    arreglo.push(HQresolution, HQfileSize, MQresolution, MQfileSize, medium);

    return arreglo;
  });

  //   listo el tercero, falta hacer el primero
  await page.evaluate(() => {
    document.querySelectorAll("#moretab tr")[3].querySelector("button").click();
  });

  await page.waitForSelector(".btn-download-link");

  const MQlink = await page.evaluate(() => {
    const MQlink = document.querySelector(".btn-download-link").href;
    return MQlink;
  });
  //   console.log(link.HQbutton);
  //   await page.click(link.HQ.querySelector(".btn-download-size"));

  console.log(MQlink);

  await browser.close();
})();
