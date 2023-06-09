const axios = require('axios');
import * as cheerio from 'cheerio';
import * as dotenv from 'dotenv'
dotenv.config()


axios.get(process.env.SEC_FILING_URL)
.then((response: { data: any; }) => {
    const $ = cheerio.load(response.data);
    
    $('table.tinytable').find('tbody').find('tr')
    .each(function(i, element){

        const tds = $(element).find("td")

        let typeOfFiling = $(tds[0]).text();
        let filingDate = $(tds[1]).text();
        let secDocLink = $(tds[1]).find('div').find('a').attr('href');
        let tradeDate = $(tds[2]).text();
        let ticker = $(tds[3]).text();
        let companyName = $(tds[4]).text();
        let insiderName = $(tds[5]).text();
        let title = $(tds[6]).text();
        let tradeType = $(tds[7]).text();
        let price = $(tds[8]).text();
        let quantity = $(tds[9]).text();
        let owned = $(tds[10]).text();
        let ownPercentageChange = $(tds[11]).text();
        let value = $(tds[12]).text();

        console.log(typeOfFiling + " " + filingDate + " " + secDocLink + " " + tradeDate + " " + 
        ticker + " " + companyName + " " + insiderName + " " + title + " " + 
        tradeType + " " + price + " " + quantity + " " + owned + " " + ownPercentageChange +
        " " + value + "\n\n") ;
    });
});
