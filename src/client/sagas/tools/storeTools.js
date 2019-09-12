let activities = require('./activities.json');
let brief = require('./brief.json');

const _ = require('lodash');
const fs = require('fs');
let modifiedActivities = [];
_.mapValues(brief, (a, k) => {
    let b = a.image;
    b["thumbnail"] = b.photo.replace("1000x1000", "500x500").replace("1000", "500");
    a.image = b;
    a.timeline = activities[k].timeline
    console.log(a.brief);
    modifiedActivities.push(a);
});
fs.writeFile("modifiedActivities.json", JSON.stringify(modifiedActivities), (x, y) => console.log(x, y));
