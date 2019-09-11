import * as actions from '../constants';

const southindia = (state = {}, action) => {
  switch (action.type) {
    case actions.SAVE:
      return Object.assign({}, state, {
        activities: action.activities,
        master_activities: action.master_activities,
      });
    case actions.OPEN_GALLERY_SUCCESS:
      return Object.assign({}, state, {
        gallery: {
          images: action.images,
          open: true,
        },
      });
    case actions.CLOSE_GALLERY_SUCCESS:
      return Object.assign({}, state, {
        gallery: {
          images: [],
          open: false,
        },
      });
    case actions.SEARCH_ACTIVITIES_SUCCESS:
      return Object.assign({}, state, {
        activities: action.activities,
      });
    default:
      return state;
  }
};

export default southindia;
