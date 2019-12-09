import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { withTheme } from 'styled-components';

import { BarGraph } from '../components/Graphs/BarGraph';
import { orderBars, sortDesc } from '../utils/order';

const GraphRoutesComponent = ({ cohortID, cohort, theme }) => {
  const { path } = useRouteMatch();

  return (
    <>
      {/* Shows gender identity graph as the default */}
      {/* TODO: redirect / to /gender-identity right away */}
      <Route exact path={path}>
        <BarGraph
          title={`Cohort ${cohortID}: Gender Identity`}
          data={cohort.gender}
          fillColor={theme.color.green}
        />
      </Route>
      <Route path={`${path}/gender-identity`}>
        <BarGraph
          title={`Cohort ${cohortID}: Gender Identity`}
          data={cohort.gender}
          fillColor={theme.color.green}
        />
      </Route>
      <Route path={`${path}/minority-group`}>
        <BarGraph
          title={`Cohort ${cohortID}: Minority Groups`}
          data={orderBars(cohort.minorityGroup, 'Prefer not to disclose')}
          fillColor={theme.color.aqua}
        />
      </Route>
      <Route path={`${path}/previous-bootcamp`}>
        <BarGraph
          title={`Cohort ${cohortID}: Previous Bootcamp`}
          data={orderBars(
            cohort.previousBootcamp,
            'I have not attended a bootcamp'
          )}
          fillColor={theme.color.pink}
        />
      </Route>
      <Route path={`${path}/employment-status`}>
        <BarGraph
          title={`Cohort ${cohortID}: Employment Status`}
          data={sortDesc(cohort.employmentStatus)}
          fillColor={theme.color.bluePurple}
        />
      </Route>
    </>
  );
};

export const GraphRoutes = withTheme(GraphRoutesComponent);
