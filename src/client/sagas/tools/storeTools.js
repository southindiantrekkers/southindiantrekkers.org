const _ = require('lodash');
const fs = require('fs');
let activities = require('./activities.json');

let modifiedActivities = [];
_.mapValues(activities, (a, k) => {
    modifiedActivities.push(a);
});
fs.writeFile("modifiedActivities.json", JSON.stringify(modifiedActivities), (x, y) => console.log(x, y));


// _.mapValues(activities, (a, k)=> {
//     _.mapValues(a.timeline, (b, l)=> {
//     console.log(`<url><loc>${b.photo}</loc><lastmod>2019-09-25</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>`);
// })})

// _.mapValues(activities, (a, k)=> {
//     console.log(`<url><loc>${a.image.thumbnail}</loc><lastmod>2019-09-25</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>`);
// });