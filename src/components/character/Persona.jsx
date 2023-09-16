import React, { useContext, useRef, useLayoutEffect } from 'react';

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

const MIN_TEXTAREA_HEIGHT = 64;

const Persona = () => {
  const { character, setCharacter } = useContext(Context);
  const textareaRef = useRef(null);

  const handleChange = (event, { key }) => {
    setCharacter({
      ...character,
      persona: {
        ...character.persona,
        [key]: event.target.value
      }
    });
  };

  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = 'inherit';
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [character.persona.description]);

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
              ref={textareaRef}
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
