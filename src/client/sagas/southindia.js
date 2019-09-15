import { put, takeEvery, select } from 'redux-saga/effects';
import * as actions from '../constants';
import _ from 'lodash';
import { callFetch } from '../services/api'
import { searchActivities } from '../utilities/search';
export function* initalize() {
  try {
    const get_master_activities = yield callFetch('https://cdn.jsdelivr.net/gh/southindiantrekkers/southindiantrekkers.org@master/src/client/sagas/modifiedActivities.json');
    const master_activities = _.sortBy(get_master_activities.response, ["image.date"]).reverse();
    // const get_user_profile = yield callFetch('/profile');
    yield put({
      type: actions.SAVE,
      master_activities,
      activities: master_activities,
      // profile: get_user_profile.response,
    });
  } catch (e) {
    yield put({ type: 'INITALIZE_APPLICATION_FAILED', number: null });
  }
}

export function* actionHandler(action) {
  try {
    switch (action.type) {
      case actions.OPEN_GALLERY: {
        const state = yield select()
        yield put({
          type: actions.OPEN_GALLERY_SUCCESS,
          images: _.map(_.get(state.southindia, `activities.${action.payload.id}.timeline`, []), (x) => x.photo),
        });
        break;
      }
      case actions.SEARCH_ACTIVITIES: {
        const state = yield select();
        const master_activities = _.get(state.southindia, 'master_activities', []);
        yield put({
          type: actions.SEARCH_ACTIVITIES_SUCCESS,
          activities: searchActivities(master_activities, action.payload.searchText),
        });
        break;
      }
      case actions.CLOSE_GALLERY: {
        yield put({
          type: actions.CLOSE_GALLERY_SUCCESS,
        });
        break;
      }
      default:
        break;
    }
  } catch (e) {
    yield put({ type: 'INITALIZE_APPLICATION_FAILED', number: null });
  }
}

export function* watcher() {
  yield takeEvery("*", actionHandler);
}


export function* initalizeWatcher() {
  yield takeEvery(actions.INITALIZE_APPLICATION, initalize);
};