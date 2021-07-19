import React, { useEffect, useState } from 'react';
import { View, Text , StyleSheet , FlatList } from 'react-native';

function Element({element}) {
    return (
        <Text style={styles.component} >{element.name}</Text>
    )
}

function CommonList({ navigation ,route}) {

    const [elements , setElements] = useState([]);
    const [page , setPage] = useState(1);
    const [hasMore , setHasMore] = useState(true);
    
    useEffect(()=>{
        fetch(route.params.url+`?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setElements(prevElements => [...prevElements, ...data.results]);
                if (data.info.next == null) setHasMore(false);
            })
            .catch(error => {
                console.error(error);
                navigation.navigate('errorPage')
        });
    }, [page])
        
    const loadMore = () => {
        if (hasMore) setPage(page => page + 1);
    }

    const renderElement = ({ item }) => (
        <Element element={item} />
    )

    const itemSeparator = () => {
        return (
            <View style={{ height: 15, width: '100%' }} />
        )
    }
    const TopBottomSeparator = () => {
        return (
            <View style={{ height: 35, width: '100%' }} />
        )
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
    )
}

const styles = StyleSheet.create({
    component: {
        width: '80%',
        alignSelf: 'center',
        fontSize: 22,
    }
})
export default CommonList;