import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './routes'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Navigation />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);


