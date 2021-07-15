import React from 'react';
import { View, Text } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'

function DrawerContent(props) {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <DrawerItem 
                    icon={({color , size}) => (
                        <Icon name="md-arrow-forward-circle-outline" size={30}/>
                    )}
                    label='Close'
                    onPress={() => props.navigation.closeDrawer()}
                />
                <DrawerItem 
                    label='All Episodes' 
                    onPress={() => props.navigation.navigate('All Episodes')}
                />
                <DrawerItem 
                    label='All Locations' 
                    onPress={() => props.navigation.navigate('All Locations')}
                />
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent;