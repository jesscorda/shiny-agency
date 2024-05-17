import styled, { DefaultTheme } from 'styled-components';
import { Flex } from '../../styles/Global';

export const HeaderStyle = styled.header`
  padding: 3rem 1rem 2rem 1rem;
`;

export const Logo = styled.div`
  ${({ theme }: { theme: DefaultTheme }) =>
    `font-family: ${theme.fonts.tiltWarp}`};
  font-size: 2.5rem;
  letter-spacing: -0.4rem;
`;

export const SearchContainer = styled(Flex)`
  position: relative;
`;

export const SearchBar = styled.input`
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  width: 50vw;
  ${({ theme }: { theme: DefaultTheme }) =>
    `box-shadow: ${theme.shadows.searchBar}`};
`;

export const SearchIcon = styled.img`
  width: 2.5rem;
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
`;

export const ThemeToggleButton = styled.button`
  padding: 1rem;
  ${({ theme }: { theme: DefaultTheme }) =>
    `background-color: ${theme.colors.accent}`};
`;
