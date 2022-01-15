const cheerio = require('cheerio');
const axios = require("axios");

async function bro(){
    const link = await axios
    .get(
      `https://api.tubemp3.biz/audio/doLMt10ytHY`
    )
    .then(function (response) {
      let $ = cheerio.load(response.data);
      var AllLinks = []
     $('a').each(function (i, e) {
       let links = $(e).attr('onclick');
       // let size = $(e).contents().text()
       //  console.log(size)
       //  console.log(links);
       AllLinks.push(links);
    
    })
    
    return AllLinks;
     //  const bro = response.data
     // console.log(bro)
     //  return response.data.result;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
    
    console.log(link)
}
bro();