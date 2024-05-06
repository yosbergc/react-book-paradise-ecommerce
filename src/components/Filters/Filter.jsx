import './filter.css'
import { cartContext } from '../../context/CartContext'
import { useContext } from 'react'
function Filters({ handleGenre, handlePages, booksGenres, filters, booksFiltered }) {
    const {cart} = useContext(cartContext)
    const filteredISBNs = new Set(booksFiltered.map(book => book.book.ISBN));
    const currentCartFiltered = cart.filter(book => filteredISBNs.has(book.book.ISBN)).length;

    return (
        <section className='filters-container'>
            {booksFiltered.length > 0 ? booksFiltered.length > 1 ? <p>Hay {booksFiltered.length} libros</p> : <p>Hay {booksFiltered.length} libro</p> : <p>No hay libros que cumplan con tus parámetros</p>}
            <p>De los cuales {currentCartFiltered} están en la lista de lectura</p>
            <h3>Haz uso de los filtros</h3>
            <section>
                <label htmlFor="genre">Elige el género que deseas</label>
                <select id="genre" onChange={handleGenre}>
                    <option value="Todos">Todos</option>
                    {booksGenres.map(genre => {
                        return <option value={genre} key={genre}>{genre}</option>
                    })}
                </select>
            </section>
            <section>
                <label htmlFor="pages">Cantidad de páginas mínima</label>
                <input type="range" id="pages" max={1000} onChange={handlePages} value={filters.pages}/>
                <span>{filters.pages}</span>
            </section>
        </section>
    )
}
export { Filters }