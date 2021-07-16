// Imports
import React , { useState , useEffect , createContext } from "react";
import { useNavigation } from '@react-navigation/native';

//Creating Context
export const charactersContext = createContext();


// Creating Provider
export const CharactersProvider = (props) => {

    //Setting up state
    const [characters, setCharacters] = useState([]);
    const [characterPage , setCharacterPage] = useState(1)
    const [hasMore, setHasMore] = useState(true);

    // Creating instace of navigation hook 
    const navigation = useNavigation();

    //Fetching API
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${characterPage}`)
            .then(res => res.json())
            .then(data => {
                setCharacters(prevCharacters => [...prevCharacters, ...data.results]);
                if (data.info.next == null) setHasMore(false);
            })
            .catch(error => {
                console.error(error);
                navigation.navigate('errorPage')
            })
    }, [characterPage])

    // Providing the state to children components 
    return (
        <charactersContext.Provider value={{ 
            char: {characters, setCharacters}, 
            more: {hasMore, setHasMore}, 
            page: {characterPage, setCharacterPage}
        }}>
            {props.children}
        </charactersContext.Provider>
    )
}