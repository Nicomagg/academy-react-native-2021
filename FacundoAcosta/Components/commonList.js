import React, { useEffect, useState } from 'react';
import { View, Text , StyleSheet , FlatList } from 'react-native';

function Element({element}) {
    return (
        <Text>{element.name}</Text>
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
            <View style={{ height: 5, width: '100%' }} />
        )
    }

    return (
        <View>
            <FlatList
                data={elements}
                ItemSeparatorComponent={itemSeparator}
                ListFooterComponent={itemSeparator}
                ListHeaderComponent={itemSeparator}
                renderItem={renderElement}
                onEndReached={loadMore}
                keyExtractor={element => element.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})
export default CommonList;