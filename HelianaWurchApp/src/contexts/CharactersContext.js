import React, {createContext, useState, useEffect} from 'react';

const CharactersContext = createContext();

function CharactersContextProvider({children}) {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(json => setCharacters(json.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <CharactersContext.Provider value={{isLoading, characters}}>
      {children}
    </CharactersContext.Provider>
  );
}

export {CharactersContextProvider, CharactersContext};
