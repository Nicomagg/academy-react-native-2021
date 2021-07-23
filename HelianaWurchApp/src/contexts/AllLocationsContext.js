import React, {createContext, useState, useEffect} from 'react';
import {fetchEndpointData} from '../utils/api';

const AllLocationsContext = createContext();

function AllLocationsContextProvider({children}) {
  const [isLoading, setLoading] = useState(true);
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetchEndpointData('location', setLocations, setLoading);
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
