//This is a file for the home page
import React from "react";
import { Title } from "../components/Title/Title";
import { CohortList } from "../components/CohortList/CohortList";
import { LineGraph } from "../components/Graphs/LineGraph";
import {HomePageStyle} from "./HomePageStyle";


const cohorts = {
  "cohort-8": 43,
  "cohort-6": 43,
  "cohort-7": 44
};


export const HomePage = () => {
  return (
    <HomePageStyle>
      <Title />
      <CohortList cohorts={cohorts}/>
      <LineGraph />
    </HomePageStyle>
  );
};
