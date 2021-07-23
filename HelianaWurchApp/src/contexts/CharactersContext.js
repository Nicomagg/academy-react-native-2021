import React, {createContext, useState, useEffect} from 'react';
import {API_URL} from '../utils/api';

const CharactersContext = createContext();

function CharactersContextProvider({children}) {
  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setLoading(true);
    getCharactersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const getCharactersData = () => {
    fetch(`${API_URL}/character/?page=${currentPage}`)
      .then(response => response.json())
      .then(json => {
        setCharacters([...characters, ...json.results]);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const searchCharacterFilter = text => {
    setLoading(true);
    fetch(`${API_URL}/character/?name=${text}`)
      .then(response => response.json())
      .then(json => {
        setFilteredCharacters(json.results);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
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
        search,
        filteredCharacters,
        handleInputChange,
        loadMoreItem,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

export {CharactersContextProvider, CharactersContext};
