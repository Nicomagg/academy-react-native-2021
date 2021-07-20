import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';

import {CharactersContext} from '../contexts/CharactersContext';

import SearchInput from '../components/filters/SearchInput';
import CharacterListItem from '../components/CharacterListItem';
import NoResults from '../components/NoResults';

export default function CharacterList({navigation}) {
  const {
    isLoading,
    characters,
    search,
    filteredCharacters,
    handleInputChange,
    loadMoreItem,
  } = useContext(CharactersContext);

  return (
    <View>
      <View>
        <SearchInput
          inputValue={search}
          handleInputChange={handleInputChange}
        />
        <FlatList
          data={search ? filteredCharacters : characters}
          renderItem={({item}) => <CharacterListItem character={item} />}
          keyExtractor={item => item.id}
          ListEmptyComponent={NoResults}
          contentContainerStyle={{paddingBottom: 120}}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.5}
        />
      </View>
    </View>
  );
}
