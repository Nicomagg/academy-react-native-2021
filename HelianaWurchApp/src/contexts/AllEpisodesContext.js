import React, {createContext, useState, useEffect} from 'react';

const AllEpisodesContext = createContext();

function AllEpisodesContextProvider({children}) {
  const [isLoading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(json => {
        setEpisodes(json.results);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AllEpisodesContext.Provider
      value={{
        isLoading,
        episodes,
      }}>
      {children}
    </AllEpisodesContext.Provider>
  );
}

export {AllEpisodesContextProvider, AllEpisodesContext};
