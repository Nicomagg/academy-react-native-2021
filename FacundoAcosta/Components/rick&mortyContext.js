// Imports
import React , { useState , useEffect , createContext } from "react";
import { useNavigation } from '@react-navigation/native';

//Creating Context
export const charactersContext = createContext();


// Creating Provider
export const CharactersProvider = (props) => {

    //Setting up state
    const [characters, setCharacters] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [Page, setPage] = useState(1);
    const [filter, setFilter] = useState('character');
    const [query, setQuery] = useState('');

    // Creating instace of navigation hook
    const navigation = useNavigation();

    //Fetching API
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/${filter}/?` + new URLSearchParams({page: Page}).toString())
            .then(res => res.json())
            .then(data => {
                setCharacters(prevCharacters => [...prevCharacters, ...data.results]);
                if (data.info.next == null) setHasMore(false);
            })
            .catch(error => {
                console.error(error);
                navigation.navigate('errorPage');
            })
    }, [Page, filter]);

    // Providing the state to children components 
    return (
        <charactersContext.Provider value={{ 
            char: {characters, setCharacters}, 
            more: {hasMore, setHasMore}, 
            page: {Page, setPage},
            searchVal: {query, setQuery},
            searchLabel: {filter, setFilter}
        }}>
            {props.children}
        </charactersContext.Provider>
    )
}