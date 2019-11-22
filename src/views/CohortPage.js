import React from "react";
import { Title } from "../components/Title/Title";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { BarGraph } from "../components/Graphs/BarGraph";
import "../views/CohortPage.scss";

export const CohortPage = props => {
  return (
    <div className="cohort-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="graph-section">
        <Title />
        <BarGraph />
      </div>
    </div>
  );
};
