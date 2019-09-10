import { put, takeEvery, select } from 'redux-saga/effects';
import * as actions from '../constants';
import activities from './activities.json';
import _ from 'lodash';
export function* initalize() {
  try {
    yield put({
      type: actions.SAVE,
      activities: _.sortBy(activities, ["image.date"]),
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