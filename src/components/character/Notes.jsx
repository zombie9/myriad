import React, { useContext, useRef, useLayoutEffect } from 'react';

import { Context } from '../../context/context';
import { Box, BoxHeader, BoxBody } from '../../styles/sharedStyles';

const MIN_TEXTAREA_HEIGHT = 64;

const Notes = () => {
  const { character, setCharacter } = useContext(Context);
  const textareaRef = useRef(null);
  const handleChange = (event) => {
    setCharacter({
      ...character,
      notes: event.target.value
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
        <code>Notes:</code>
      </BoxHeader>
      <BoxBody>
        <textarea
          ref={textareaRef}
          spellCheck="false"
          value={character.notes}
          onChange={(event) => handleChange(event)}
        />
      </BoxBody>
    </Box>
  );
};

export default Notes;
