const links = Array.from(document.querySelectorAll('.al-item'));

const picks = links
              .map(link => link.textContent)
              .filter(keyWord => keyWord.includes('الملك'));



// needed from each item in reformatted array: title text, hyperlink
// need to scan actual article contents

//node request logic
var request = require('request'),
    cheerio = require('cheerio'),
    urls = [];
request('http://www.alghad.com/categories/1-%D8%A7%D9%84%D8%BA%D8%AF-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86%D9%8A', function(err, resp, body){
  if(!err && resp.statusCode == 200){
    var $ = cheerio.load(body);
    $('a.title', '#siteTable').each(function(){  //customize for alghad
      var url = this.attr('href');               //ditto
      urls.push(url);
    })
  }
