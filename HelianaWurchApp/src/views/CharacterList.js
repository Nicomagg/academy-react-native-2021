import React, {useContext} from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';

import {CharactersContext} from '../contexts/CharactersContext';

import CharacterListItem from '../components/CharacterListItem';
import SearchInput from '../components/filters/SearchInput';

export default function CharacterList({navigation}) {
  const {
    isLoading,
    // searchFilterFunction,
    characters,
    search,
    filteredCharacters,
    handleInputChange,
    loadMoreItem,
  } = useContext(CharactersContext);

  const NoResults = () => {
    return <Text>No Results</Text>;
  };

  const renderLoader = () => (
    <View>
      <ActivityIndicator size="large" color="#787878" />
    </View>
  );
  console.log(characters);
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
          ListFooterComponent={renderLoader}
          contentContainerStyle={{paddingBottom: 120}}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.5}
        />
      </View>
    </View>
  );
}

/*
  <FlatList
          // data={characters}
          data={search ? filteredCharacters : characters}
          initialNumToRender={4}
          renderItem={({item}) => <CharacterListItem character={item} />}
          keyExtractor={item => item.id}
          ListEmptyComponent={NoResults}
          ListFooterComponent={renderFooter}
          onEndReached={}
          onEndReachedThreshold={0}
          // progressViewOffset={20}
        />

*/
