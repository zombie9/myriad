import { createGlobalStyle } from 'styled-components';

import Montserrat from './assets/fonts/Montserrat-Regular.ttf';
import RobotoMono from './assets/fonts/RobotoMono-Light.ttf';

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

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    transition: all 0.30s linear;
    font-family: 'Montserrat';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: 'Roboto Mono';
  }
`;

export default GlobalStyles;
