import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeContextProvider as ThemeProvider} from "Context/ThemeContext"
import {CovidAPIContext as CovidProvider} from "Context/CovidAPIContext"

import {Global} from 'Styles/Global'
import {Home} from 'Pages/Home/index';
import {MMM} from 'Pages/MediaMovelMortes';
import {Gap} from 'Components/Gap'

ReactDOM.render(
  <React.StrictMode>

    <CovidProvider>
      <ThemeProvider>
        <>
          <Global />
          <Home />
          <Gap />
          <MMM />
        </>
      </ThemeProvider>
    </CovidProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


