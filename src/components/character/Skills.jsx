import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../context/context';
import { skillsFields } from '../../data/skills';
import { Box, BoxHeader, BoxBody, SinglePod } from '../../styles/sharedStyles';

import AddSkill from './AddSkill';
import SkillRow from './SkillRow';

const Centre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
`;

const Skills = () => {
  const { character } = useContext(Context);
  return (
    <Box>
      <BoxHeader>
        <code>{`${skillsFields.title}:`}</code>
      </BoxHeader>
      <BoxBody>
        <SinglePod>
          {character.skills.map((field, index) => {
            return <SkillRow field={field} key={index} index={index} />;
          })}
        </SinglePod>
      </BoxBody>
      <Centre>
        <AddSkill />
      </Centre>
    </Box>
  );
};

export default Skills;
