import React from "react";
import styled from "styled-components";
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid black;
  :first-child {
    border-top: none;
  }
`;

