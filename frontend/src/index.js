import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { Provider } from './context/authentication';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>
);
