import React, {useContext} from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';

import {CharactersContext} from '../contexts/CharactersContext';

import CharacterListItem from '../components/CharacterListItem';
import SearchInput from '../components/filters/SearchInput';

export default function CharacterList({navigation}) {
  const {isLoading, searchFilterFunction, search, filteredCharacters} =
    useContext(CharactersContext);

  const NoResults = () => {
    return <Text>No Results</Text>;
  };

  const handleInputChange = text => {
    searchFilterFunction(text);
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#787878" />
      ) : (
        <View>
          <SearchInput
            inputValue={search}
            handleInputChange={handleInputChange}
          />
          <FlatList
            data={filteredCharacters}
            renderItem={({item}) => <CharacterListItem character={item} />}
            keyExtractor={item => item.id}
            ListEmptyComponent={NoResults}
          />
        </View>
      )}
    </View>
  );
}
