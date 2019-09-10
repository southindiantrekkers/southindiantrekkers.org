import * as actions from '../constants';

const calc = (state = {}, action) => {
  switch (action.type) {
  case actions.SAVE:
    return Object.assign({}, state, {
      activities: action.activities,
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
  default:
    return state;
  }
};

export default calc;
