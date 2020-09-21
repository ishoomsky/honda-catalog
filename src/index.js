import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ThemeProvider } from '@material-ui/core';
import theme from './materialUi/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers/reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';



const store = createStore(
  reducers,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //расширение для отладки
);

ReactDOM.render(

  <Provider store = {store}>
    <ThemeProvider  theme={theme}>
        <CssBaseline />
        <App />

    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);