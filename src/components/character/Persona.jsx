import React, { useContext } from 'react';

import { Context } from '../../context/context';
import { personaFields } from '../../data/persona';
import {
  Box,
  BoxHeader,
  BoxBody,
  SinglePod,
  Field,
  TextLabel,
  PersonaDescriptionField
} from '../../styles/sharedStyles';

const Persona = () => {
  const { character, setCharacter } = useContext(Context);
  const handleChange = (event, { key }) => {
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
          {personaFields.fields.map((field) => {
            return (
              <Field key={field.name}>
                {field.name !== 'description' && (
                  <>
                    <TextLabel>{field.name}</TextLabel>
                    <input
                      type="text"
                      value={character.persona[field.name]}
                      onChange={(event) => handleChange(event, { key: field.name })}
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
              onChange={(event) => handleChange(event, { key: 'description' })}
            />
          </PersonaDescriptionField>
        </SinglePod>
      </BoxBody>
    </Box>
  );
};

export default Persona;
