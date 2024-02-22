import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppR from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <AppR />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
