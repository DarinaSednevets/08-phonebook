import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'modern-normalize/modern-normalize.css';
import store from '../src/redux/store.js'
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

