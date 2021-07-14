import React , { useState , useEffect , createContext } from "react";

export const charactersContext = createContext();

export const CharactersProvider = (props) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCharacters(data.results))
            .catch(error => {
                console.log(error);
                // navigation.navigate('errorpage')
            })
    }, [])

    return (
        <charactersContext.Provider value={[characters,setCharacters]} >
            {props.children}
        </charactersContext.Provider>
    )
}