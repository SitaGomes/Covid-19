import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from 'Pages/Home/index';
import {Global} from 'Styles/Global'
import {ThemeContextProvider as ThemeProvider} from "Context/ThemeContext"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <>
        <Global />
        <Home />
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


