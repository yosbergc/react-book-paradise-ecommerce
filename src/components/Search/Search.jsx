import { CiSearch } from "react-icons/ci"
import './search.css'
function Search () {
    return (
        <div className="search-container">
            <input type="text" placeholder="El señor de los anillos"/>
            <CiSearch size={20}/>
        </div>
    )
}
export { Search }