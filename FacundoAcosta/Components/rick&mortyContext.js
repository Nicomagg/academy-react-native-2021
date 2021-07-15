import React , { useState , useEffect , createContext } from "react";
import { useNavigation } from '@react-navigation/native';

export const charactersContext = createContext();





export const CharactersProvider = (props) => {
    const [characters, setCharacters] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCharacters(data.results))
            .catch(error => {
                console.log(error);
                navigation.navigate('errorPage')
            })
    }, [])

    return (
        <charactersContext.Provider value={[characters,setCharacters]} >
            {props.children}
        </charactersContext.Provider>
    )
}