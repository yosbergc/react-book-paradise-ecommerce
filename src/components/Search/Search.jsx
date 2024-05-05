import React from 'react'
import { CiSearch } from "react-icons/ci"
import './search.css'
import { FilterContext } from "../../context/FilterContext"

function Search () {
    const {handleQuery} = React.useContext(FilterContext)
    return (
        <div className="search-container">
            <input type="text" placeholder="El señor de los anillos" onChange={handleQuery}/>
            <CiSearch size={20}/>
        </div>
    )
}
export { Search }