import React, { useEffect } from "react";
import "./App.scss";

import { request } from "./backend-request";
import { HomePage } from "./views/HomePage";
import { CohortPage } from "./views/CohortPage";
import { Header } from "./components/Header/Header";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  //TODO remove comment on useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     return await request("health");
  //   };
  //   fetchData();
  // });
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/cohorts/:id" component={CohortPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
