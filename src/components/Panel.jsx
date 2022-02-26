import React from 'react';
import styled from 'styled-components';

import SkillRow from './SkillRow';

const Box = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.panel};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  font-size: 1rem;

  @media only screen and (min-width: 720px) {
    padding: 2rem;
  }
`;

const BoxHeader = styled.h2`
  font-size: 1.2rem;
`;

const BoxBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 720px) {
    flex-direction: row;
  }
`;

const DualPod = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 720px) {
    width: 50%;

    &:first-child {
      border-right: 1px solid ${({ theme }) => theme.secondary};
      padding-right: 2em;
    }

    &:last-child {
      padding-left: 2em;
    }
  }
`;

const SinglePod = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
`;

const NumberField = styled.input`
  padding: 0.3rem;
  /* margin: 0.5rem 0; */
  width: 5rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.secondary};
  text-align: right;
  color: ${({ theme }) => theme.primary};
  font-size: 0.9em;
  font-family: 'Roboto Mono';

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const LineField = styled.input`
  padding: 0.3rem;
  /* margin: 0.5rem 0; */
  width: 100%;
  background: none;
  border: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  font-family: 'Montserrat';

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const TextField = styled.textarea`
  padding: 0.3rem;
  /* margin: 0.5rem 0; */
  width: 100%;
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

const FieldLabel = styled.label`
  min-width: 8rem;
`;

const TextLabel = styled.label`
  min-width: 8rem;
  padding-top: 0.2rem;
  align-self: flex-start;
`;

export const Panel = ({ section, sectionType, pods }) => {
  return (
    <Box>
      <BoxHeader>
        <code>{`${section}:`}</code>
      </BoxHeader>
      <BoxBody>
        {pods.map((pod, index) => {
          {
            if (sectionType === 'dual') {
              return (
                <DualPod key={index}>
                  {pod.map((field, index) => {
                    return (
                      <Field key={index}>
                        <p>{field.name}</p>
                        {field.type === 'number' && <NumberField type="text" />}
                        {field.type === 'line' && <LineField type="text" />}
                      </Field>
                    );
                  })}
                </DualPod>
              );
            }
            if (sectionType === 'single') {
              return (
                <SinglePod key={index}>
                  {pod.map((field, index) => {
                    return (
                      <Field key={index}>
                        {field.type === 'text' || field.type === 'skill' ? (
                          <TextLabel>{field.name}</TextLabel>
                        ) : (
                          <FieldLabel>{field.name}</FieldLabel>
                        )}
                        {field.type === 'number' && <NumberField type="text" />}
                        {field.type === 'line' && <LineField type="text" />}
                        {field.type === 'text' && <TextField spellCheck="false" />}
                        {field.type === 'skill' && <SkillRow field={{ ...field }}></SkillRow>}
                      </Field>
                    );
                  })}
                </SinglePod>
              );
            }
          }
        })}
      </BoxBody>
    </Box>
  );
};
