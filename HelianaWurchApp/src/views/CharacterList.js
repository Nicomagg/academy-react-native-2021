import React, {useContext} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';

import {CharactersContext} from '../contexts/CharactersContext';
import {globalStyles} from '../styles/globalStyleSheet';

import CharacterListItem from '../components/CharacterListItem';
import SearchInput from '../components/filters/SearchInput';

export default function CharacterList({navigation}) {
  const {isLoading, characters} = useContext(CharactersContext);

  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#787878" />
      ) : (
        <FlatList
          data={characters}
          renderItem={({item}) => <CharacterListItem character={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View>
              <SearchInput />
            </View>
          }
        />
      )}
    </View>
  );
}