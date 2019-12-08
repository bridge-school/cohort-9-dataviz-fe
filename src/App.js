import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './GlobalStyle';
import { HomePage } from './views/HomePage';
import CohortPage from './views/CohortPage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />
          <Header />
          {/*TODO: add defaut route*/}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route path="/cohorts/:id" component={CohortPage} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
