import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import News from './components/news';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <News />
  </Provider>,
  document.getElementById('root'));
  