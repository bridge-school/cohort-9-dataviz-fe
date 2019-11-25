import React from "react";
import { Title } from "../components/Title/Title";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { BarGraph } from "../components/Graphs/BarGraph";
import { CohortPageStyle } from "./CohortPageStyle";
import { GraphSectionStyle } from "./GraphSectionStyle";

//import "../views/CohortPage.scss";

export const CohortPage = props => {
  return (
    <CohortPageStyle>
      <Sidebar />
      <GraphSectionStyle>
        <Title />
        <BarGraph />
      </GraphSectionStyle>
    </CohortPageStyle>
  );
};
