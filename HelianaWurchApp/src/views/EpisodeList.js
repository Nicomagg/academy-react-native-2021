import React, {useContext} from 'react';
import {FlatList} from 'react-native';

import TextListItem from '../components/TextListItem';

import {AllEpisodesContext} from '../contexts/AllEpisodesContext';

export default function EpisodeList() {
  const {isLoading, episodes} = useContext(AllEpisodesContext);

  return (
    <FlatList
      data={episodes}
      renderItem={({item}) => <TextListItem text={item} />}
      keyExtractor={item => item.id}
      // ListEmptyComponent={NoResults}
    />
  );
}
