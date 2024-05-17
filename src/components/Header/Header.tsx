import { useContext, useEffect, useState } from 'react';
import { darkIcon, lightIcon, searchIcon } from '../../assets/icons';
import { Flex } from '../../styles/Global';
import {
  HeaderStyle,
  Logo,
  NavLinks,
  SearchBar,
  SearchContainer,
  SearchIcon
} from './Header.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useDebounce } from '@uidotdev/usehooks';
import {
  DARK,
  ThemeContext
} from '../../utils/context/theme-context';
import Switch from 'react-switch';
import { useTheme } from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  const { word } = useParams();

  const { toggleTheme, theme } = useContext(ThemeContext);

  const themeProperties = useTheme();

  const [searchQuery, setSearchQuery] = useState<string | undefined>(
    word
  );

  const debouncedSearchTerm = useDebounce(searchQuery, 700);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchQuery(debouncedSearchTerm);
      navigate(`../words/${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm, navigate]);

  useEffect(() => {
    if (word) {
      setSearchQuery(word);
    }
  }, [word]);

  return (
    <HeaderStyle>
      <Flex spaceBetween>
        <Logo>WORD WAVE</Logo>
        <SearchContainer>
          <SearchBar
            value={searchQuery}
            placeholder="Search the world of words..."
            onChange={event => setSearchQuery(event.target.value)}
          />
          <SearchIcon src={searchIcon} />
        </SearchContainer>
        <nav>
          <NavLinks>
            <li>
              <Switch
                onColor={themeProperties.colors.accent}
                uncheckedIcon={false}
                checkedIcon={false}
                uncheckedHandleIcon={<img src={lightIcon}></img>}
                checkedHandleIcon={<img src={darkIcon}></img>}
                onChange={() => toggleTheme()}
                checked={theme === DARK}
              />
            </li>
            <li></li>
          </NavLinks>
        </nav>
      </Flex>
    </HeaderStyle>
  );
};

export default Header;
