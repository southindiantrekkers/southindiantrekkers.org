import { all } from 'redux-saga/effects';
import * as watcher from './southindia';
export default function* rootSaga() {
  yield all([watcher.initalizeWatcher(), watcher.watcher()]);
}
