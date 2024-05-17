import { useEffect } from 'react';
import { useWordDetails } from '../../queries/wordDetails.query';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  TitleContainer,
  WordHeading,
  PhoneticsCard,
  MeaningsContainer,
  MeaningRow,
  DefinitionContainer,
  DefinitionTitle,
  Definition,
  PartOfSpeech,
  BackIcon,
  DoubleLeftIcon,
  IconContainer
} from './WordDetails.styled';
import { Flex } from '../../styles/Global';
import {
  Antonyms,
  Example,
  Synonyms
} from '../../types/WordDetails.type';
import { backIcon, homeIcon } from '../../assets/icons';
import Loader from '../../components/Loader';

const SynonymComponent = ({ synonyms }: { synonyms: Synonyms }) =>
  synonyms.length > 0 && (
    <Flex gap="1rem">
      <span>Synonyms: </span>
      <div>{synonyms.join(', ')}</div>
    </Flex>
  );

const AntonymComponent = ({ antonyms }: { antonyms: Antonyms }) =>
  antonyms.length > 0 && (
    <Flex gap="1rem">
      <span>Antonyms: </span>
      <div>{antonyms.join(', ')}</div>
    </Flex>
  );

const ExamplesComponent = ({ example }: { example: Example }) =>
  example && (
    <Flex gap="1rem">
      <span>Examples: </span>
      <div>{example}</div>
    </Flex>
  );

const WordList = () => {
  const { word } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, refetch, error } = useWordDetails(word);

  useEffect(() => {
    refetch();
  }, [word, refetch]);

  const [wordDetails] = data ?? [];

  if (isLoading)
    return (
      <Container>
        <Loader count={20} />
      </Container>
    );
  if (error)
    return (
      <Container>
        <IconContainer>
          <DoubleLeftIcon src={backIcon} />
          <button>
            <BackIcon src={homeIcon} onClick={() => navigate('/')} />
          </button>
        </IconContainer>
        <Flex>An error occurred: {error.message}</Flex>
      </Container>
    );

  return (
    <Container>
      <IconContainer>
        <DoubleLeftIcon src={backIcon} />
        <button>
          <BackIcon src={homeIcon} onClick={() => navigate('/')} />
        </button>
      </IconContainer>
      <TitleContainer>
        <WordHeading>{wordDetails?.word}</WordHeading>
        <Flex gap="1rem" wrap="true">
          {wordDetails.phonetics.map((phonetic, key) => (
            <PhoneticsCard key={key}>{phonetic.text}</PhoneticsCard>
          ))}
        </Flex>
      </TitleContainer>
      <MeaningsContainer>
        {wordDetails.meanings.map((meaning, key) => (
          <MeaningRow key={key} wrap="true">
            <Flex direction="column" gap="2rem">
              <PartOfSpeech>{meaning.partOfSpeech}</PartOfSpeech>
              <SynonymComponent synonyms={meaning.synonyms} />
              <AntonymComponent antonyms={meaning.antonyms} />
            </Flex>
            <DefinitionContainer>
              {meaning.definitions.map((definition, key) => (
                <Definition key={key}>
                  <DefinitionTitle>
                    {definition.definition}
                  </DefinitionTitle>
                  <SynonymComponent synonyms={definition.synonyms} />
                  <AntonymComponent antonyms={definition.antonyms} />
                  <ExamplesComponent example={definition.example} />
                </Definition>
              ))}
            </DefinitionContainer>
          </MeaningRow>
        ))}
      </MeaningsContainer>
    </Container>
  );
};

export default WordList;
