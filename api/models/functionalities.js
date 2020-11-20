// const Database = require('../util/db');
const Util = require('../util/util');
const util = require('util')
// const fs = require('fs');
// var path = require('path');
// var Fuse = require('fuse.js');
var Scraper = require('images-scraper');
var gis = require('g-i-s');
const gisPromise = util.promisify(gis);
// var FlexSearch = require("flexsearch");

// var dir = path.join('../', 'images');

class Functionalities {
    static async googleImgRetrieve(query, num = 5) {
        var results;
        results = await gisPromise(query);

        if(results.length != num)
            results = results.slice(0, num);
        
        for(var i = 0; i < results.length; i++)
            results[i].url = JSON.parse('"' + results[i].url + '"');
        
        // console.log(results[0].url)

        return results;
    }
};

module.exports = Functionalities;