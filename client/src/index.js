import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './admin/store/AdminIndex';
import store2 from './client/store';

window.store = store
window.store = store2

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store }>
  <Provider store={store2 }>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  </Provider>
);


