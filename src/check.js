import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
