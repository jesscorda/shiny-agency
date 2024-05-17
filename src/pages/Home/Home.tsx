import { useNavigate } from 'react-router-dom';
import { GridItem } from '../../components';
import { GenerateButton, Word, WordGrid } from './Home.styled';
import { useRandomWords } from '../../queries/randomWords.query';
import { Flex } from '../../styles/Global';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';

const Home = () => {
  const navigate = useNavigate();

  const [firstLoad, setFirstLoad] = useState(true);

  const { data, isLoading, refetch, error } =
    useRandomWords(firstLoad);

  const fetchRandomWords = (): void => {
    refetch();
  };

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  if (isLoading)
    return (
      <WordGrid>
        {new Array(6).fill(0).map(() => (
          <Loader count={10} />
        ))}
      </WordGrid>
    );
  if (error) return <Flex>An error occurred: {error.message}</Flex>;

  return (
    <Flex direction="column">
      <WordGrid>
        {data?.map((char: string, index: number) => (
          <GridItem
            key={index}
            handleClick={() => navigate(`../words/${char}`)}
          >
            <Word>{char}</Word>
          </GridItem>
        ))}
      </WordGrid>
      <GenerateButton onClick={fetchRandomWords}>
        Generate
      </GenerateButton>
    </Flex>
  );
};

export default Home;
