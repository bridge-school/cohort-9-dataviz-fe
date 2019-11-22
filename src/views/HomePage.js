//This is a file for the home page
import React from "react";
import { Title } from "../components/Title/Title";
import { CohortList } from "../components/CohortList/CohortList";
import { LineGraph } from "../components/Graphs/LineGraph";
import "../views/HomePage.scss";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Title />
      <CohortList />
      <LineGraph />
    </div>
  );
};
