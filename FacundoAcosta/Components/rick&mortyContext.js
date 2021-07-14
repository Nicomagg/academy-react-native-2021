import React , { useState , createContext } from "react";

export const charactersContext = createContext();

export const CharactersProvider = (props) => {
    const [characters, setCharacters] = useState([]);

    return (
        <charactersContext.Provider value={[characters,setCharacters]} >
            {props.children}
        </charactersContext.Provider>
    )
}