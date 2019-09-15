const _ = require('lodash');
const fs = require('fs');
let activities = require('./activities.json');

let modifiedActivities = [];
_.mapValues(activities, (a, k) => {
    modifiedActivities.push(a);
});
fs.writeFile("modifiedActivities.json", JSON.stringify(modifiedActivities), (x, y) => console.log(x, y));
