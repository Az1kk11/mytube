import React, { createContext, useEffect, useState } from "react";

import { fetchDataApi } from "../Utils/ApiData";
export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [mobilMenu, setMobilMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory)
    }, [selectedCategory])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataApi(`search/?q=${query}`).then(({ contents })=>{
            setSearchResults(contents)
            setLoading(false)
        });
    };

    return (
        <Context.Provider  
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobilMenu,
                setMobilMenu
            }}
        >
            {props.children}
        </Context.Provider>
    )
}