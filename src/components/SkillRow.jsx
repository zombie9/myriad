import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-grow: 1;
`;

const StatField = styled.input`
  padding: 0.3rem;
  /* margin: 0.5rem; */
  margin-right: 0.6rem;
  width: 100%;
  height: 1.4rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  font-family: 'Montserrat';

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.primary};
  }
  width: 2rem;
`;

const DescriptionField = styled.textarea`
  flex-grow: 1;
  padding: 0.3rem;
  /* margin: 0.5rem; */
  margin-right: 0.6rem;
  width: 100%;
  height: 1.4rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  font-family: 'Montserrat';
  resize: vertical;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const LevelField = styled.input`
  padding: 0.3rem;
  /* margin: 0.5rem 0; */
  width: 100%;
  height: 1.4rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  font-family: 'Montserrat';

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.primary};
  }
  width: 4rem;
`;

const SkillRow = ({ field }) => {
  console.log(field);
  return (
    <Row>
      <StatField value={field.stat} />
      <DescriptionField value={field.description} />
      <LevelField />
    </Row>
  );
};

export default SkillRow;
