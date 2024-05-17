import styled, { DefaultTheme } from 'styled-components';
import { Grid } from '../../styles/Global';

export const Container = styled.section`
  padding: 0 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WordHeading = styled.h1`
  ${({ theme }: { theme: DefaultTheme }) =>
    `font-family: ${theme.fonts.tiltWarp}`};
  font-size: 6rem;
  text-transform: capitalize;
`;

export const PhoneticsCard = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem;
  ${({ theme }: { theme: DefaultTheme }) =>
    `border: 0.125rem solid ${theme.colors.secondary}`};
  border-radius: 10rem;
`;

export const MeaningsContainer = styled.div`
  margin-top: 2rem;
`;

export const MeaningRow = styled(Grid)`
  ${({ theme }: { theme: DefaultTheme }) =>
    `border-top: 0.125rem solid ${theme.colors.secondary}`};
  grid-template-columns: 20rem 4fr;
  padding: 1rem;
`;

export const DefinitionContainer = styled.ul`
  ${({ theme }: { theme: DefaultTheme }) =>
    `border-left: 0.125rem solid ${theme.colors.secondary}`};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding-left: 1rem;
  overflow: hidden;
`;

export const Definition = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    inline-size: 100vw;
    block-size: 0.05rem;
    inset-inline-start: 0;
    inset-block-start: -1rem;
    ${({ theme }: { theme: DefaultTheme }) =>
      `background-color: ${theme.colors.secondary}`};
  }
  ,
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    inline-size: 0.05rem;
    block-size: 100vh;
    inset-block-start: 0;
    inset-inline-start: -1rem;
    ${({ theme }: { theme: DefaultTheme }) =>
      `background-color: ${theme.colors.secondary}`};
  }
`;

export const DefinitionTitle = styled.p`
  font-size: 1.75rem;
  ${({ theme }: { theme: DefaultTheme }) =>
    `font-family: ${theme.fonts.tiltWarp}`};
`;

export const PartOfSpeech = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BackIcon = styled.img`
  width: 1.5rem;
`;

export const DoubleLeftIcon = styled.img`
  width: 1rem;
  height: 0.5rem;
`;
