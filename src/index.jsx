import 'bootstrap/dist/css/bootstrap.css';
import '@trendmicro/react-modal/dist/react-modal.css';
import 'toastr/build/toastr.min.css';
import 'toastr/build/toastr.min';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
