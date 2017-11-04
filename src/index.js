/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import reducers from './reducers';
import sagas from './sagas';
import './styles.css';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(sagas);

const ThemedApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemedApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
