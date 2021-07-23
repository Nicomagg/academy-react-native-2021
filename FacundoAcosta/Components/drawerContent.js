import React from 'react';
import { View, Text , Dimensions} from 'react-native';
import { DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'

let width = Dimensions.get('window').width;

function DrawerContent(props) {
    return(
        <View style={{
            flex: 1,
        }}>
            <DrawerItem
                style={{
                    width: width / 4,
                    marginHorizontal: 10,
                    alignSelf: 'flex-end'
                }}
                labelStyle={{
                    textAlign: 'left',
                    right: 50,
                    width: width / 8
                }}
                icon={() => (
                    <Icon name="md-arrow-forward-circle-outline" size={30} style={{left: 65}} testID={'close drawer icon'} />
                )}
                label='Close'
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem 
                label='All Episodes' 
                onPress={() => {
                    props.navigation.navigate('All Episodes');
                }}
                style={{
                    width: width / 1.67,
                    marginHorizontal: 0,
                    right: -30,
                }}
                labelStyle={{ fontSize: 25, color: 'black', textAlign: 'right', width: width / 1.8}}
            />
            <DrawerItem 
                label='All Locations' 
                onPress={() => {
                    props.navigation.navigate('All Locations');
                }}
                style={{
                    width: width / 1.67,
                    marginHorizontal: 0,
                    right: -30,
                }}
                labelStyle={{ fontSize: 25, color: 'black', textAlign: 'right', width: width / 1.8}}
            />

        </View>
    )
}

export default DrawerContent;