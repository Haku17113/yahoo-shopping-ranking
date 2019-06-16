import { createStore as reduxCreateStore, combineReducers, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

export default function createStore(history){
  const rootReducer = combineReducers({
    ...reducers,
    router : connectRouter(history),
  });
  const savedState = JSON.parse(localStorage.getItem('app-state'));

  return reduxCreateStore(
    rootReducer,
    savedState ? savedState : rootReducer(undefined, {type: 'INIT'}),
    compose(
      applyMiddleware(
        routerMiddleware(history),
        logger,
        thunk,
      )
    )
  );
}
