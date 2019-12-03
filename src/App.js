import React from 'react';
import { GlobalStyle } from './GlobalStyle';

//import { request } from "./backend-request";
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './views/HomePage';
import { CohortPage } from './views/CohortPage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Header />
        {/*TODO: add defaut route*/}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/cohorts/:id" component={CohortPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
