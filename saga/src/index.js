import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App';
import rootSaga from './sagas';

// saga middleware that will monitor all external async operations
// this will also monitor the store

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
  );
  // initialize saga so that it will run the watchers
  console.log(JSON.stringify(store));
  sagaMiddleware.run(rootSaga);
  
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
  