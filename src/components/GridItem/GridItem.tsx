import {
  GridItemContainer,
  GridItemInnerBox
} from './GridItem.styled';

const GridItem = ({ children, handleClick }) => {
  return (
    <GridItemContainer>
      <GridItemInnerBox onClick={handleClick}>
        {children}
      </GridItemInnerBox>
    </GridItemContainer>
  );
};

export default GridItem;
