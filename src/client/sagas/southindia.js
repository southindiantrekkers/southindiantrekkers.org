import {  put, takeEvery } from 'redux-saga/effects';
import * as actions from '../constants';
import activities  from './activities.json';

export function* initalize() {
  try {
    yield put({
      type: actions.SAVE,
      activities: activities,
    });
  } catch (e) {
    yield put({ type: 'INITALIZE_APPLICATION_FAILED', number: null });
  }
}

export function* initalizeWatcher() {
  yield takeEvery(actions.INITALIZE_APPLICATION, initalize);
}