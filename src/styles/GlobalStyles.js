import { createGlobalStyle } from 'styled-components';

import Montserrat from '../assets/fonts/Montserrat-Regular.ttf';
import RobotoMono from '../assets/fonts/RobotoMono-Light.ttf';

const GlobalStyles = createGlobalStyle`
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: 'Roboto Mono';
  }

  input, textarea {
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
  }

  textarea {
    resize: vertical;
  }
`;

export default GlobalStyles;
