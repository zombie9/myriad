import React from 'react';

import { statFields } from '../data/stats';
import {
  Box,
  BoxHeader,
  BoxBody,
  DualPod,
  Field,
  NumberField,
  FieldLabel
} from '../styles/sharedStyles';

const Stats = () => {
  return (
    <Box>
      <BoxHeader>
        <code>{`${statFields.title}:`}</code>
      </BoxHeader>
      <BoxBody>
        {statFields?.pods?.map((pod, index) => {
          return (
            <DualPod key={index}>
              {pod.map((field, index) => {
                return (
                  <Field key={index}>
                    <FieldLabel>{field.name}</FieldLabel>
                    <NumberField type="text" />
                  </Field>
                );
              })}
            </DualPod>
          );
        })}
      </BoxBody>
    </Box>
  );
};

export default Stats;
