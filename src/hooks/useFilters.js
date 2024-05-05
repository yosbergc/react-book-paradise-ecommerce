import React from "react"
const InitialFilters = {
    query: '',
    genre: 'Todos',
    pages: 0
}
function useFilters() {
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
    return {filters, handleGenre, handlePages}
}
export { useFilters }