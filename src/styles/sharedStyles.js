import styled from 'styled-components';

export const Box = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.panel};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  font-size: 1rem;

  @media only screen and (min-width: 720px) {
    padding: 2rem;
  }
`;

export const BoxHeader = styled.h2`
  font-size: 1.2rem;
`;

export const BoxBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 720px) {
    flex-direction: row;
  }
`;

export const SinglePod = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const FieldLabel = styled.label`
  min-width: 8rem;
  text-transform: capitalize;
`;

export const TextLabel = styled.label`
  min-width: 8rem;
  text-transform: capitalize;
  padding-top: 0.2rem;
  align-self: flex-start;
`;

export const DualPod = styled.div`
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

export const NumberField = styled.input`
  width: 5rem;
  text-align: right;
`;
