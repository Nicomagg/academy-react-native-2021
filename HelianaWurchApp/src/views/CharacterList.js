import React, {useContext} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

import {CharactersContext} from '../contexts/CharactersContext';
import {textListStyles} from '../styles/globalStyleSheet';

import SearchInput from '../components/filters/SearchInput';
import CharacterListItem from '../components/CharacterListItem';
import NoResults from '../components/NoResults';
import LoadIndicator from '../components/LoadIndicator';

export default function CharacterList({navigation}) {
  const {
    isLoading,
    characters,
    search,
    filteredCharacters,
    handleInputChange,
    loadMoreItems,
  } = useContext(CharactersContext);

  function handleOnPress(item) {
    navigation.navigate('CharacterProfile', item);
  }

  return (
    <View>
      <View>
        <SearchInput
          inputValue={search}
          handleInputChange={handleInputChange}
        />
        <FlatList
          data={search ? filteredCharacters : characters}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleOnPress({item})}>
              <CharacterListItem character={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            !isLoading ? (
              NoResults
            ) : (
              <View style={textListStyles.text_list_container}>
                <Text style={textListStyles.text_loading}>Loading...</Text>
              </View>
            )
          }
          contentContainerStyle={{paddingBottom: 150}}
          onEndReached={loadMoreItems}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isLoading ? LoadIndicator : null}
        />
      </View>
    </View>
  );
}
