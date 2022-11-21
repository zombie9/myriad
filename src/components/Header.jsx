import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: 1rem 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.background};
  z-index: 9997;

  @media only screen and (min-width: 720px) {
    font-size: 2rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <code>M Y R I A D</code>
    </StyledHeader>
  );
};

export default Header
