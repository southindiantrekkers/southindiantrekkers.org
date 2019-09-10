import { put, takeEvery, select } from 'redux-saga/effects';
import * as actions from '../constants';
import activities from './modifiedActivities.json';
import _ from 'lodash';
import { searchActivities } from '../utilities/search'
export function* initalize() {
  try {
    const master_activities = _.cloneDeep(_.sortBy(activities, ["image.date"]));
    yield put({
      type: actions.SAVE,
      master_activities,
      activities: master_activities,
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