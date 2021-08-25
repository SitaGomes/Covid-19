import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from 'Pages/Home/index';
import {Global} from 'Styles/Global'

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


