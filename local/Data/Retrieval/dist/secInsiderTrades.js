"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const cheerio = __importStar(require("cheerio"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
axios.get(process.env.SEC_FILING_URL)
    .then((response) => {
    const $ = cheerio.load(response.data);
    $('table.tinytable').find('tbody').find('tr')
        .each(function (i, element) {
        const tds = $(element).find("td");
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
            " " + value + "\n\n");
    });
});
