import React from 'react';
import styled from 'styled-components';

import { content } from '../data/content';

import { Panel } from './Panel';

const StyledContainer = styled.div`
  margin: 0 auto;
  font-size: calc(10px + 2vmin);
  padding: 5.3rem 0;
  max-width: 960px;
`;

export const Container = () => {
  return (
    <StyledContainer>
      {content.map((section, index) => {
        return <Panel section={section.title} pods={section.pods} key={index} />;
      })}
    </StyledContainer>
  );
};
