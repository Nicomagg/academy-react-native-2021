// Imports
import React , { useState , useEffect , createContext } from "react";
import { useNavigation } from '@react-navigation/native';

//Creating Context
export const charactersContext = createContext();


// Creating Provider
export const CharactersProvider = (props) => {

    //Setting up state
    const [characters, setCharacters] = useState([]);

    // Creating instace of navigation hook 
    const navigation = useNavigation();

    //Fetching API
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCharacters(data.results))
            .catch(error => {
                console.log(error);
                navigation.navigate('errorPage')
            })
    }, [])

    // Providing the state to children components 
    return (
        <charactersContext.Provider value={[characters,setCharacters]} >
            {props.children}
        </charactersContext.Provider>
    )
}