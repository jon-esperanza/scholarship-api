import axios from 'axios';
import cheerio from 'cheerio';
import Scholarship from '../db/Scholarships.js';


// scholarships landing page
export const getIndex = (req, res) => {
    res.send('Tasks available:' + 
    '\n/ - gets all scholarships in database' +
    '\n/scrape - (POSTMAN) webscrapes data and sends to database' + 
    '\n/[searchTerm] - search for items in database' + 
    '\n/clear - clears all items in database');
}
// db get all route
export const getAll = (req, res) => {
    //find all scholarships
    Scholarship.find({})
        .then(function(savedItems) {
        // if all items are successfully found
            res.json(savedItems);
        })
        .catch(function(err) {
            // if something wrong happens
            res.json(err);
    });
}
//db webscape to collect data
export const scrapeData = (req, res) => {
    scrape().then(function(foundItems) {
        console.log("scraped:");
        console.log(foundItems);
        // save scraped item
        foundItems.forEach(function(eachItem){
            Scholarship.create(eachItem)
            .then(function(savedItem) {
                //if saved success
                console.log(savedItem);
            })
            .catch(function(err) {
                // if error occurs
                console.log(err.message);
            });
        });
        res.json(foundItems);
    })
    .catch(function(err) {
        res.json(err);
    });
}
// db search for items
export const getItem = (req, res) => {
    Scholarship.find({"title": { '$regex': req.params.searchTerm, 
    '$options': 'i' }})
        .then(function(foundItems) {
            res.json(foundItems);
        })
        .catch(function(err) {
            res.json(err);
        });
}
// db clear database
export const clear = (req, res) => {
    Scholarship.deleteMany({})
        .then(function(res) {
            res.json(res);
            res.send('Scholarship database cleared.');
        })
        .catch(function(err) {
            res.json(err);
        })
}
export var scrape = function() {
    var list= [];
    return axios.get('https://collegesofdistinction.com/advice/the-mega-list-of-scholarships-you-should-apply-for-class-of-2019-2020/')
    .then(function(response) {
        var $ = cheerio.load(response.data);
       
        var listItems = $('#content .content h3').each(function(i, elem) {
            var scholarship = {};
            var $regex = new RegExp(/(\bAmount: | amount:)/);
            scholarship.title = $(elem).text().trim();
            scholarship.deadline = $(elem).next().text().substring(9).trim();
            scholarship.award = $(elem).next().next().text().substring(6).replace($regex, "").trim();
            scholarship.description = $(elem).next().next().next().text().substring(9).trim();
            scholarship.website = $(elem).find('a').attr('href');
            list.push(scholarship);
        });
        console.log(list);
        return list;
    });
}