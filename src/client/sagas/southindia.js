import {  put, takeEvery } from 'redux-saga/effects';
import * as actions from '../constants';
import activities  from './activities.json';
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

export function* initalizeWatcher() {
  yield takeEvery(actions.INITALIZE_APPLICATION, initalize);
}