import React, { useContext } from 'react';
import { PlusCircle } from 'react-bootstrap-icons';

import { Context } from '../context/context';
import { Button } from '../styles/sharedStyles';

const AddSkill = () => {
  const { character, setCharacter } = useContext(Context);
  const handleAddSkill = () => {
    setCharacter({
      ...character,
      skills: [
        ...character.skills,
        {
          name: '',
          stat: '',
          description: '',
          value: ''
        }
      ]
    });
  };
  return (
    <Button onClick={() => handleAddSkill()}>
      <PlusCircle size={22} />
    </Button>
  );
};

export default AddSkill;
