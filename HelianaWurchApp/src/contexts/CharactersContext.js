import React, {createContext, useState, useEffect} from 'react';

const CharactersContext = createContext();

function CharactersContextProvider({children}) {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  const API_URL = 'https://rickandmortyapi.com/api';

  useEffect(() => {
    getCharactersData();
  }, [currentPage]);

  const getCharactersData = () => {
    setLoading(true);
    fetch(`${API_URL}/character/?page=${currentPage}`)
      .then(response => response.json())
      .then(json => {
        setCharacters([...characters, ...json.results]);
        // setFilteredCharacters(json.results);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  /*
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
  }; */

  const searchCharacterFilter = text => {
    fetch(`${API_URL}/character/?name=${text}`)
      .then(response => response.json())
      .then(json => {
        setFilteredCharacters(json.results);
      })
      .catch(error => console.error(error));
  };

  const handleInputChange = text => {
    if (text) {
      searchCharacterFilter(text);
      setSearch(text);
    } else {
      setFilteredCharacters(characters);
      setSearch('');
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        isLoading,
        characters,
        // searchFilterFunction,
        loadMoreItem,
        handleInputChange,
        search,
        filteredCharacters,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

export {CharactersContextProvider, CharactersContext};
