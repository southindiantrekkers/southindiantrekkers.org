let activities = require('./activities.json');
const _ = require('lodash');
const fs = require('fs');
const modifiedActivities = _.map(activities, (a) => {
    let b = a.image;
    b["thumbnail"] = b.photo.replace("1000x1000", "500x500").replace("1000", "500");
    a.image = b;
    return a;
});
fs.writeFile("modifiedActivities.json", JSON.stringify(modifiedActivities), (x, y) => console.log(x, y));
