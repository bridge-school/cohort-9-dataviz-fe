import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { BarGraph } from '../components/Graphs/BarGraph';
import { CohortPageStyle } from './CohortPageStyle';
import { GraphSectionStyle } from './GraphSectionStyle';

//import "../views/CohortPage.scss";

export const CohortPage = props => {
  const { path } = useRouteMatch();

  return (
    <CohortPageStyle>
      <Sidebar />
      <GraphSectionStyle>
        {/* Shows gender identity graph as the default */}
        {/* TODO: redirect this to /gender-identity */}
        <Route exact path={path}>
          <BarGraph title="Gender Identity" data={data.gender} />
        </Route>
        <Route path={`${path}/gender-identity`}>
          <BarGraph title="Gender Identity" data={data.gender} />
        </Route>
        <Route path={`${path}/minority-group`}>
          <BarGraph title="Minority Group" data={data.minorityGroup} />
        </Route>
        <Route path={`${path}/previous-bootcamp`}>
          <BarGraph title="Previous Bootcamp" data={data.previousBootcamp} />
        </Route>
        <Route path={`${path}/employment-status`}>
          <BarGraph title="Employment Status" data={data.employmentStatus} />
        </Route>
      </GraphSectionStyle>
    </CohortPageStyle>
  );
};

const data = {
  id: 'cohort-6',
  gender: [
    {
      name: 'Woman',
      count: 39
    },
    {
      name: 'Non-biry',
      count: 2
    },
    {
      name: 'Man',
      count: 2
    }
  ],
  minorityGroup: [
    {
      name: 'Prefer not to disclose',
      count: 12
    },
    {
      name: 'LGBTQIA+',
      count: 4
    },
    {
      name: 'Other',
      count: 3
    },
    {
      name: 'Person of colour',
      count: 20
    }
  ],
  previousBootcamp: [
    {
      name: 'Other',
      count: 1
    },
    {
      name: 'HackerYou',
      count: 15
    },
    {
      name: 'Bitmaker',
      count: 2
    },
    {
      name: 'BrainStation',
      count: 2
    },
    {
      name: 'Lighthouse Labs',
      count: 5
    },
    {
      name: 'University of Toronto Coding Bootcamp',
      count: 1
    },
    {
      name: 'I have not attended a bootcamp',
      count: 19
    }
  ],
  employmentStatus: [
    {
      name: 'Employed full time',
      count: 26
    },
    {
      name: 'Employed part time',
      count: 5
    },
    {
      name: 'Unemployed and not looking for a job',
      count: 2
    },
    {
      name: 'Unemployed and looking for a job',
      count: 7
    },
    {
      name: 'In school full time',
      count: 3
    }
  ]
};
