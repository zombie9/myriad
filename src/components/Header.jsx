import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Box = styled.div`
  padding: 2rem 2rem 2.5rem 2rem;
  background: ${({ theme }) => theme.panel};
  width: 75%;
  text-align: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 480px) {
    width: 30%;
    min-width: 424px;
  }
`;

const HeaderText = styled.code`
  display: block;
  width: fit-content;
  align-self: center;
  transition: transform 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

const SmallText = styled.p`
  font-size: small;
  display: block;
  width: fit-content;
  align-self: center;
  transition: transform 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

const tagLine = "[what's the]";

export const Header = () => {
  return (
    <StyledHeader>
      <Box>
        <SmallText>{tagLine}</SmallText>
        <HeaderText>big idea</HeaderText>
      </Box>
    </StyledHeader>
  );
};
