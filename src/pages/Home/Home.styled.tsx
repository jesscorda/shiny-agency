import styled, { DefaultTheme } from 'styled-components';

export const WordGrid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  max-width: 70vw;
  margin: 0 auto;
`;

export const Word = styled.p`
  font-size: 3.5rem;
  ${({ theme }: { theme: DefaultTheme }) =>
    `font-family: ${theme.fonts.tiltWarp}`};
  text-transform: capitalize;
  text-align: center;
`;

export const GenerateButton = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  margin: 0 auto;
  margin-top: 2rem;
  ${({ theme }: { theme: DefaultTheme }) =>
    `background-color: ${theme.colors.secondary};
  font-family: ${theme.fonts.tiltWarp}
  `};
  width: 10rem;
`;
