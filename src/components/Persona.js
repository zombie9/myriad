import React from 'react';

import { personaFields } from '../data/persona';
import {
  Box,
  BoxHeader,
  BoxBody,
  SinglePod,
  Field,
  TextLabel,
  FieldLabel
} from '../styles/sharedStyles';

const Persona = () => {
  return (
    <Box>
      <BoxHeader>
        <code>{`${personaFields.title}:`}</code>
      </BoxHeader>
      <BoxBody>
        <SinglePod>
          {personaFields?.fields?.map((field, index) => {
            return (
              <Field key={index}>
                {field.type === 'text' || field.type === 'skill' ? (
                  <TextLabel>{field.name}</TextLabel>
                ) : (
                  <FieldLabel>{field.name}</FieldLabel>
                )}
                {field.type === 'line' && <input type="text" />}
                {field.type === 'text' && <textarea spellCheck="false" />}
              </Field>
            );
          })}
        </SinglePod>
      </BoxBody>
    </Box>
  );
};

export default Persona;
