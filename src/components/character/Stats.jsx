import React, { useContext } from 'react';

import { Context } from '../../context/context';
import { statFields } from '../../data/stats';
import {
  Box,
  BoxHeader,
  Field,
  NumberField,
  FieldLabel,
  DualPod,
  StatBlock
} from '../../styles/sharedStyles';

const Stats = () => {
  const { character, setCharacter } = useContext(Context);
  const handleChange = (event, key) => {
    setCharacter({
      ...character,
      stats: {
        ...character.stats,
        [key]: event.target.value
      }
    });
  };

  return (
    <Box>
      <BoxHeader>
        <code>{`${statFields.title}:`}</code>
      </BoxHeader>
      <DualPod>
        {Object.keys(character.stats).map((key, index) => {
          return (
            <StatBlock key={index}>
              <Field key={key}>
                <FieldLabel>{key}</FieldLabel>
                <NumberField
                  spellCheck="false"
                  value={character.stats[key]}
                  onChange={(event) => handleChange(event, key)}
                />
              </Field>
            </StatBlock>
          );
        })}
      </DualPod>
    </Box>
  );
};

export default Stats;
