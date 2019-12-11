import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './GlobalStyle';
import { HomePage } from './views/HomePage';
import { CohortPage } from './views/CohortPage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />
          <Header />
          <Switch>
            <Route path="/cohorts/:id">
              <CohortPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
