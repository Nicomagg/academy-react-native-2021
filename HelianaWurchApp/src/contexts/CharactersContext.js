import React, {createContext, useState, useEffect} from 'react';

const CharactersContext = createContext();

function CharactersContextProvider({children}) {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(json => {
        setCharacters(json.results);
        setFilteredCharacters(json.results);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const searchFilterFunction = text => {
    if (text) {
      const newData = characters.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredCharacters(newData);
      setSearch(text);
    } else {
      setFilteredCharacters(characters);
      setSearch(text);
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        isLoading,
        characters,
        searchFilterFunction,
        search,
        filteredCharacters,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

export {CharactersContextProvider, CharactersContext};
