/* eslint-disable import/prefer-default-export */
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['account'],
};

export function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware];


  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const pReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(pReducer, preloadedState, composedEnhancers);
  const persistor = persistStore(store);

  return { store, persistor };
}
