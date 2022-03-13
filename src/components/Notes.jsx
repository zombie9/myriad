import React, { useContext } from 'react';

import { Context } from '../context/context';
import { Box, BoxHeader, BoxBody } from '../styles/sharedStyles';

const Notes = () => {
  const { character, setCharacter } = useContext(Context);
  const handleChange = (event) => {
    setCharacter({
      ...character,
      notes: event.target.value
    });
  };

  return (
    <Box>
      <BoxHeader>
        <code>Notes:</code>
      </BoxHeader>
      <BoxBody>
        <textarea
          spellCheck="false"
          value={character.notes}
          onChange={(event) => handleChange(event)}
        />
      </BoxBody>
    </Box>
  );
};

export default Notes;
