import React from 'react';
import styled from 'styled-components';

import { ThemeButton } from '../styles/sharedStyles';

const Button = styled(ThemeButton)`
  position: fixed;
  top: 1.3rem;
  left: 1.3rem;
`;

export const SaveButton = () => {
  return <Button>Save</Button>;
};
