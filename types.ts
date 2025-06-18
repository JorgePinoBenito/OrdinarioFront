export type DataTodos = {
  id: number;
  name: string;
  image: string;
};

export type ResultsTodos = {
  results: DataTodos[];
};

export type DataCharacter = {
  id: number;
  name: string;
  image: string;
  house: string;
  alive: boolean;
};

export type ResultsCharacter = {
  results: DataCharacter[];
};
