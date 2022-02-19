import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.panel};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  font-size: 1rem;
  transition: all 1s linear;
`;

const BoxHeader = styled.h2`
  font-size: 1.2rem;
`;

const BoxBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Pod = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.secondary};
    padding-right: 2em;
  }

  &:last-child {
    padding-left: 2em;
  }
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FieldInput = styled.input`
  margin: 0.5rem 0;
  width: 5rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.secondary};
  text-align: right;
  color: ${({ theme }) => theme.primary};
  font-size: 1em;
  font-family: 'Roboto Mono';

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const Panel = ({ section, pods }) => {
  return (
    <Box>
      <BoxHeader>
        <code>{`${section}:`}</code>
      </BoxHeader>
      <BoxBody>
        {pods.map((pod, index) => {
          return (
            <Pod key={index}>
              {pod.map((field, index) => {
                return (
                  <Field key={index}>
                    <p>{field.name}</p>
                    <FieldInput type="text" />
                  </Field>
                );
              })}
            </Pod>
          );
        })}
      </BoxBody>
    </Box>
  );
};
