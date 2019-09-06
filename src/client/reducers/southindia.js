import * as actions from '../constants';

const calc = (state = {}, action) => {
  switch (action.type) {
  case actions.SAVE:
    return Object.assign({}, state, {
      activities: action.activities,
    });
  default:
    return state;
  }
};

export default calc;
