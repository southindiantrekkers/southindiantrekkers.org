import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './styles/Index.scss';
import createRouteReducers from './reducers/combined';

import rootSaga from './sagas/combined';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import * as actions from './constants';

import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router'
const history = createBrowserHistory();

// then run the saga
const store = createStore(createRouteReducers(history), composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export const action = type => store.dispatch({ type });
action(actions.INITALIZE_APPLICATION);

import Error from './components/Error';
import Home from './components/Home';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={Error} />
        </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
