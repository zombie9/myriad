import React, { useContext } from 'react';

import { Context } from '../context/context';
import { personaFields } from '../data/persona';
import { Box, BoxHeader, BoxBody, SinglePod, Field, TextLabel } from '../styles/sharedStyles';

const Persona = () => {
  const { character, setCharacter } = useContext(Context);
  const handleChange = (event, key) => {
    setCharacter({
      ...character,
      persona: {
        ...character.persona,
        [key]: event.target.value
      }
    });
  };

  return (
    <Box>
      <BoxHeader>
        <code>{`${personaFields.title}:`}</code>
      </BoxHeader>
      <BoxBody>
        <SinglePod>
          {Object.keys(character.persona).map((key) => {
            return (
              <Field key={key}>
                <TextLabel>{key}</TextLabel>
                {key === 'description' ? (
                  <textarea
                    spellCheck="false"
                    value={character.persona[key]}
                    onChange={(event) => handleChange(event, key)}
                  />
                ) : (
                  <input
                    type="text"
                    value={character.persona[key]}
                    onChange={(event) => handleChange(event, key)}
                  />
                )}
              </Field>
            );
          })}
        </SinglePod>
      </BoxBody>
    </Box>
  );
};

export default Persona;
