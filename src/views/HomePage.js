//This is a file for the home page
import React from "react";
import { Title } from "../components/Title/Title";
import { CohortList } from "../components/CohortList/CohortList";
import { LineGraph } from "../components/Graphs/LineGraph";
import {HomePageStyle} from "./HomePageStyle";

export const HomePage = () => {
  return (
    <HomePageStyle>
      <Title />
      <CohortList />
      <LineGraph />
    </HomePageStyle>
  );
};
