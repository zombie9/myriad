import React from 'react';
import styled from 'styled-components';

import Equipment from './Equipment';
import Notes from './Notes';
import Persona from './Persona';
import Skills from './Skills';
import Stats from './Stats';

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 5.6rem 0;
  max-width: 960px;
`;

const Container = () => {
  return (
    <StyledContainer>
      <Persona />
      <Stats />
      <Skills />
      <Equipment />
      <Notes />
    </StyledContainer>
  );
};

export default Container;
