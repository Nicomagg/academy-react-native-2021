import React, { useEffect, useState } from 'react';
import { View, Image , StyleSheet , Text} from 'react-native';

/* { "created": "2017-11-04T22:34:53.659Z", "episode": ["https://rickandmortyapi.com/api/episode/8"],
"gender": "Male", "id": 20, "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
"location": { "name": "Interdimensional Cable", "url": "https://rickandmortyapi.com/api/location/6" },
"name": "Ants in my Eyes Johnson", "origin": { "name": "unknown", "url": "" }, "species": "Human",
"status": "unknown", "type": "Human with ants in his eyes", "url": "https://rickandmortyapi.com/api/character/20" } */

function CharacterPreView({ character }) {

    const colors = {Alive: 'green', unknown: 'grey', Dead: 'yellow'};
    const [color, setColor] = useState(colors[character.status]);
    
    return (
        <View style={styles.container}>
            <Image style={styles.imgPreview} source={{uri: character.image}} />
            <View style= {styles.data}>
                <Text style={styles.name}>{character.name}</Text>
                <View style={styles.status}>
                    <View style={{...styles.collorBullet, backgroundColor: color}} testID={'CollorBullet'}></View>
                    <Text>{character.status}{" "}{character.species}</Text>
                </View>
                <Text>Last known location:</Text>
                <Text style={styles.txtBold}>{character.location.name}</Text>
                <Text>First seen in:</Text>
                <Text style={styles.txtBold}>{character.origin.name}</Text>
            </View>
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 20,
        overflow: 'hidden',
        width: '85%',
        alignSelf: 'center',
        borderColor: 'grey',
        borderWidth: 1,
    },
    imgPreview: {
        width: '50%',
        height: 150
    },
    data: {
        marginLeft: 25,
        justifyContent: 'center'
    },
    txtBold: {
        fontWeight: 'bold',
        width: '85%'
    },
    name: {
        fontSize: 15,
        marginBottom: 5,
        width: '95%'
    },
    status: {
        flexDirection: 'row',
    },
    collorBullet: {
        height: 10,
        width: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginRight: 4
    }
})

export default CharacterPreView;