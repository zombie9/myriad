import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-size: 2rem;
  padding: 1rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.background};
  z-index: 9998;

  @media only screen and (min-width: 720px) {
    align-items: center;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <code>M Y R I A D</code>
    </StyledHeader>
  );
};
