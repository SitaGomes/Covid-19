import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import {ThemeContextProvider as ThemeProvider} from "Context/ThemeContext"
import {CovidAPIContext as CovidProvider} from "Context/CovidAPIContext"

import {Global} from 'Styles/Global'
import {Home} from 'Pages/Home/index';
import {MMM} from 'Pages/MediaMovelMortes';

ReactDOM.render(
  <React.StrictMode>

  <Router>
    <Switch>

      <CovidProvider>
        <ThemeProvider>

            <>
              <Global />
              <Route exact path="/" component={Home} />
              <Route exact path="/mmm" component={MMM} />
            </>

        </ThemeProvider>
      </CovidProvider>

    </Switch>
  </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


