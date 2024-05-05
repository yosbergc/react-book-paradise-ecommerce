import './filter.css'
function Filters({ handleGenre, handlePages, booksGenres, filters }) {

    return (
        <section className='filters-container'>
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