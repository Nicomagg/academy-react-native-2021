import React, {createContext, useState, useEffect} from 'react';

const AllLocationsContext = createContext();

function AllLocationsContextProvider({children}) {
  const [isLoading, setLoading] = useState(true);
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
      .then(response => response.json())
      .then(json => {
        setLocations(json.results);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AllLocationsContext.Provider
      value={{
        isLoading,
        locations,
      }}>
      {children}
    </AllLocationsContext.Provider>
  );
}

export {AllLocationsContextProvider, AllLocationsContext};
