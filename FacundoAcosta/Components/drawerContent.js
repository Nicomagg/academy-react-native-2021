import React from 'react';
import { View, Text } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'

function DrawerContent(props) {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props} >
                <DrawerItem 
                    icon={() => (
                        <Icon name="md-arrow-forward-circle-outline" size={30}/>
                    )}
                    label='Close'
                    onPress={() => props.navigation.closeDrawer()}
                />
                <DrawerItem 
                    label='All Episodes' 
                    onPress={() => props.navigation.navigate('All Episodes')}
                    style={{ marginLeft: 60 }}
                    labelStyle={{ fontSize: 25, color: 'black' }}
                />
                <DrawerItem 
                    label='All Locations' 
                    onPress={() => props.navigation.navigate('All Locations')}
                    style={{ marginLeft: 60 }}
                    labelStyle={{fontSize: 25, color: 'black'}}
                />
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent;