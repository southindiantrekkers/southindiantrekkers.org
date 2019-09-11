import * as actions from '../constants';

const user = (state = {}, action) => {
  switch (action.type) {
    case actions.SAVE:
      return Object.assign({}, state, {
        profile: action.profile,
      });
    default:
      return state;
  }
};

export default user;
