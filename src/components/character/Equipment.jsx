import React, { useContext } from 'react';

import { Context } from '../../context/context';
import { Box, BoxHeader, BoxBody } from '../../styles/sharedStyles';

const Equipment = () => {
  const { character, setCharacter } = useContext(Context);
  const handleChange = (event) => {
    setCharacter({
      ...character,
      equipment: event.target.value
    });
  };

  return (
    <Box>
      <BoxHeader>
        <code>Equipment:</code>
      </BoxHeader>
      <BoxBody>
        <textarea
          rows={character.equipment.split('\n').length + 1}
          spellCheck="false"
          value={character.equipment}
          onChange={(event) => handleChange(event)}
        />
      </BoxBody>
    </Box>
  );
};

export default Equipment;
