import React, { useEffect, useState } from 'react';
import { View, Text , StyleSheet , FlatList } from 'react-native';

function CommonList({ navigation ,route}) {

    const [elements , setElements] = useState([]);
    const [listPage , setListPage] = useState(1);
    const [hasMore , setHasMore] = useState(true);
    
    useEffect(async ()=>{
        await fetch(route.params.url + new URLSearchParams({page: listPage}).toString())
            .then(res => res.json())
            .then(data => {
                setElements(prevElements => [...prevElements, ...data.results]);
                if (data.info.next == null) setHasMore(false);
            })
            .catch(error => {
                console.log(error);
                navigation.navigate('errorPage');
        });
    }, [listPage]);
        
    const loadMore = () => {
        if (hasMore) setListPage(listPage => listPage + 1);
    }

    const renderElement = ({ item }) => (
        <Text style={styles.component} testID={'List Element'} >{item.name}</Text>
    )

    const itemSeparator = () => {
        return (
            <View style={{ height: 15, width: '100%' }} />
        );
    }
    const TopBottomSeparator = () => {
        return (
            <View style={{ height: 35, width: '100%' }} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={elements}
                ItemSeparatorComponent={itemSeparator}
                ListFooterComponent={TopBottomSeparator}
                ListHeaderComponent={TopBottomSeparator}
                renderItem={renderElement}
                onEndReached={loadMore}
                keyExtractor={element => element.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    component: {
        width: '80%',
        alignSelf: 'center',
        fontSize: 22,
    }
});

export default CommonList;