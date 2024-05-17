import styled, { DefaultTheme } from 'styled-components';

export const GridItemContainer = styled.div`
  padding: 0.7rem;
  ${({ theme }: { theme: DefaultTheme }) =>
    `
    background-image: linear-gradient(45deg,${theme.colors.secondary} 25%, transparent 25%), linear-gradient(-45deg,${theme.colors.secondary} 25%, transparent 25%), linear-gradient(45deg, transparent 85%,${theme.colors.secondary} 85%), linear-gradient(-45deg, transparent 85%,${theme.colors.secondary} 85%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;`}
`;

export const GridItemInnerBox = styled.div`
  border-radius: 3rem;
  ${({ theme }: { theme: DefaultTheme }) =>
    `background-color: ${theme.colors.accent}`};
  padding: 4rem 2rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
