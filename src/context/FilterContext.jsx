import React from 'react'
const InitialFilters = {
    query: '',
    genre: 'Todos',
    pages: 0
}

const FilterContext = React.createContext();

function FilterContextProvider ({children}) {
    const [filters, setFilters] = React.useState(InitialFilters)
    const handleGenre = (event) => {
        const newFilter = {...filters}
        newFilter.genre = event.target.value
        setFilters(newFilter)
    }
    const handlePages = (event) => {
        const newFilters = {...filters};
        newFilters.pages = event.target.value;
        setFilters(newFilters)
    }
    const handleQuery = (event) => {
        const newFilters = {...filters};
        newFilters.query = event.target.value;
        setFilters(newFilters)
        console.log(newFilters)
    }
    return <FilterContext.Provider value={{
        filters, 
        handleGenre, 
        handlePages, 
        handleQuery
    }}>
        {children}
    </FilterContext.Provider>
}
export {FilterContext, FilterContextProvider}