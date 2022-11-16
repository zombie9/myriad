import React from 'react';

import {
  AuthBox,
  AuthField,
  Field,
  Heading,
  TextLabel,
  ModalBackdrop,
  ThemeButton,
  SubmitButtonWrapper
} from '../../styles/sharedStyles';

const SignIn = () => {
  return (
    <ModalBackdrop>
      <AuthBox>
        <Heading>S I G N I N</Heading>
        <Field>
          <TextLabel>Email</TextLabel>
          <AuthField type="email" />
        </Field>
        <Field>
          <TextLabel>Password</TextLabel>
          <AuthField type="password" />
        </Field>
        <SubmitButtonWrapper>
          <ThemeButton><code>S U B M I T</code></ThemeButton>
        </SubmitButtonWrapper>
      </AuthBox>
    </ModalBackdrop>
  );
};

export default SignIn;
