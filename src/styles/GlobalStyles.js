import { createGlobalStyle } from 'styled-components';

import Montserrat from '../assets/fonts/Montserrat-Regular.ttf';
import RobotoMono from '../assets/fonts/RobotoMono-Light.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoMono});
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: normal;
    src: url(${Montserrat});
  }

  :root {
    font-size: 13px;

    @media only screen and (min-width: 720px) {
      font-size: 15px;
  }
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    transition: background-color 0.5s linear;
    font-family: 'Montserrat';
  }

  code {
    font-family: 'Roboto Mono';
  }

  input, textarea, select {
    padding: 0.3rem;
    width: 100%;
    background: none;
    border: 1px solid ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
    font-family: 'Montserrat';

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.primary};
    }

    ::placeholder {
      color: ${({ theme }) => theme.mid};
    }
  }

  textarea {
    resize: vertical;
    white-space: pre-wrap;
  }

  svg {
    cursor: pointer;
    path {
      fill: ${({ theme }) => theme.mid};
    }

    &:hover {
      path {
        fill: ${({ theme }) => theme.primary};
      }
    }
  }
`;

