import React, {createContext, useState, useEffect} from 'react';
import {API_URL} from '../utils/api';

const CharactersContext = createContext();

function CharactersContextProvider({children}) {
  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const loadMoreItems = () => {
    if (hasMoreItems) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    getCharactersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const getCharactersData = () => {
    if (hasMoreItems) {
      fetch(`${API_URL}/character/?page=${currentPage}`)
        .then(response => response.json())
        .then(json => {
          checkNextPageAvailable(json);
          setCharacters([...characters, ...json.results]);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  };

  const searchCharacterFilter = text => {
    if (hasMoreItems) {
      setLoading(true);
      fetch(`${API_URL}/character/?name=${text}`)
        .then(response => response.json())
        .then(json => {
          checkNextPageAvailable(json);
          setFilteredCharacters(json.results);
        })
        .catch(error => {
          console.error(error);
          setHasMoreItems(false);
        })
        .finally(() => setLoading(false));
    }
  };

  const handleInputChange = text => {
    if (text) {
      setHasMoreItems(true);
      searchCharacterFilter(text);
      setSearch(text);
    } else {
      setFilteredCharacters(characters);
      setSearch('');
    }
  };

  function checkNextPageAvailable(response) {
    if (response && response.info && response.info.next) {
      setHasMoreItems(true);
    } else {
      setHasMoreItems(false);
      setCurrentPage(1);
      setLoading(false);
    }
  }

  return (
    <CharactersContext.Provider
      value={{
        isLoading,
        characters,
        search,
        filteredCharacters,
        handleInputChange,
        loadMoreItems,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

export {CharactersContextProvider, CharactersContext};
