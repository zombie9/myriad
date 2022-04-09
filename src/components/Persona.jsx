import React, { useContext } from 'react';

import { Context } from '../context/context';
import { personaFields } from '../data/persona';
import {
  Box,
  BoxHeader,
  BoxBody,
  SinglePod,
  Field,
  TextLabel,
  PersonaDescriptionField
} from '../styles/sharedStyles';

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
                {key !== 'description' && (
                  <>
                    <TextLabel>{key}</TextLabel>
                    <input
                      type="text"
                      value={character.persona[key]}
                      onChange={(event) => handleChange(event, key)}
                    />
                  </>
                )}
              </Field>
            );
          })}
          <PersonaDescriptionField>
            <TextLabel>Description</TextLabel>
            <textarea
              rows={character.persona.description.split('\n').length + 1}
              spellCheck="false"
              value={character.persona.description}
              onChange={(event) => handleChange(event, 'description')}
            />
          </PersonaDescriptionField>
        </SinglePod>
      </BoxBody>
    </Box>
  );
};

export default Persona;
