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
  margin-top: 0;
  font-size: 1.2rem;
  margin-bottom: 1.6rem;
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

export const DualPod = styled.ul`
  padding: 0;
  margin: 0;

  & li:nth-child(odd) {
    padding-right: 1em;
  }
  & li:nth-child(even) {
    padding-left: 1em;
  }

  @media only screen and (min-width: 720px) {
    & li:nth-child(odd) {
      border-right: 1px solid ${({ theme }) => theme.secondary};
      padding-right: 2em;
    }
    & li:nth-child(even) {
      padding-left: 2em;
    }
  }
`;

export const StatBlock = styled.li`
  box-sizing: border-box;
  display: inline-block;
  min-width: 50%;
  list-style-type: none;

  @media only screen and (min-width: 720px) {
    min-width: 50%;
  }
`;

export const NumberField = styled.input`
  width: 4rem;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  background: none;
`;

export const SkillBlock = styled.div`
  margin-bottom: 1.6rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  align-items: center;
`;

export const StatField = styled.select`
  margin-right: 0.6rem;
  width: 5rem;
  /* height: 2rem; */
  text-align: center;
  font-size: 0.8rem;
`;

export const DescriptionField = styled.textarea`
  flex-grow: 1;
  margin-right: 0.6rem;
  height: 1.4rem;
`;

export const LevelField = styled.input`
  width: 4rem;
  height: 1.4rem;
  text-align: center;
`;

export const SkillLabel = styled.input`
  height: 1.4rem;
  margin-right: 0.6rem;
`;

export const DiceBox = styled.div`
  width: 5.4rem;
  text-align: center;
  height: 1.6rem;
`;

export const ThemeButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.mid};
  cursor: pointer;
  padding: 0.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
  z-index: 100;

  &:hover {
    background: ${({ theme }) => theme.panel};
  }
`;
