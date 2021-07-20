import React, {createContext, useState, useEffect} from 'react';
import {fetchEndpointData} from '../utils/api';

const AllEpisodesContext = createContext();

function AllEpisodesContextProvider({children}) {
  const [isLoading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    fetchEndpointData('episode', setEpisodes, setLoading);
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
