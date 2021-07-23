import React from 'react';
import { View, Text , Image , StyleSheet } from 'react-native';

function CharacterDetails({ route }) {
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: route.params.image}} testID={'Character Details Image'} />
            <View style={styles.data}>
                <View style={styles.column}>
                    <Text style={styles.label}>Name:</Text>
                    <Text>{route.params.name}</Text>
                    <Text style={styles.label}>Status:</Text>
                    <Text>{route.params.status}</Text>
                    <Text style={styles.label}>Species:</Text>
                    <Text>{route.params.species}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.label}>Origin:</Text>
                    <Text>{route.params.origin.name}</Text>
                    <Text style={styles.label}>Location:</Text>
                    <Text>{route.params.location.name}</Text>
                    <Text style={styles.label}>Gender:</Text>
                    <Text>{route.params.gender}</Text>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    image: {
        width: '100%',
        height: '60%'
    },
    data: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '40%',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    label: {
        fontWeight: 'bold'
    },
    column: {
        height: '100%',
        justifyContent: 'space-between'
    }
})
export default CharacterDetails;