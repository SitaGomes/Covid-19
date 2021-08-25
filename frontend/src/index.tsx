import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeContextProvider as ThemeProvider} from "Context/ThemeContext"

import {Global} from 'Styles/Global'
import {Home} from 'Pages/Home/index';
import {MMM} from 'Pages/MediaMovelMortes';
import {Gap} from 'Components/Gap'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <>
        <Global />
        <Home />
        <Gap />
        <MMM />
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


