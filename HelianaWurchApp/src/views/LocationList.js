import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import NoResults from '../components/NoResults';

import TextListItem from '../components/TextListItem';
import LoadIndicator from '../components/LoadIndicator';

import {AllLocationsContext} from '../contexts/AllLocationsContext';

export default function LocationList() {
  const {isLoading, locations} = useContext(AllLocationsContext);

  return (
    <FlatList
      data={locations}
      renderItem={({item}) => <TextListItem text={item} />}
      keyExtractor={item => item.id}
      ListEmptyComponent={isLoading ? LoadIndicator : NoResults}
    />
  );
}
