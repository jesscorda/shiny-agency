import {
  GridItemContainer,
  GridItemInnerBox
} from './GridItem.styled';

const GridItem = ({
  children,
  handleClick
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <GridItemContainer>
      <GridItemInnerBox onClick={handleClick}>
        {children}
      </GridItemInnerBox>
    </GridItemContainer>
  );
};

export default GridItem;
