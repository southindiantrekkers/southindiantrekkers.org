
import Fuse from 'fuse.js';
import _ from 'lodash';
export const searchActivities = (list, searchText) => {
    if (_.isEmpty(searchText))
        return list;
    var options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "title",
        ]
    };
    var fuse = new Fuse(list, options); // "list" is the item array
    return fuse.search(searchText);
}