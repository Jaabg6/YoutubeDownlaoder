 const puppeteer = require("puppeteer");
 var url = "https://platzi.com/web/";
 (async () => {
   const browser = await puppeteer.launch({
     headless: false,
     args: ["--no-sandbox", "--disable-setuid-sandbox"]
     // args: ["--no-sandbox"],
   });
   const page = await browser.newPage();
   // convert to mp3 /${idUrl}`
    await page.goto(url);
    await page.waitForSelector(".RoutesList-item-name");

    const courses = await page.evaluate(() => {
        const courses = Array.from(document.querySelectorAll(".RoutesList-item-name"));
        //const levels = Array.from(document.querySelectorAll(".RoutesList-item-level"));
        return courses.map(course => course.innerText);
    })
    //console.log of each course of courses
    courses.forEach(course => console.log(course));
 })();
