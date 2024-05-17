export type WordDetails = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: Synonyms;
  antonyms: Antonyms;
};

export type Definition = {
  definition: string;
  example: Example;
  synonyms: Synonyms;
  antonyms: Antonyms;
};

export type Phonetic = {
  text: string;
  audio?: string;
};

export type Synonyms = string[];

export type Antonyms = string[];

export type Example = string;
