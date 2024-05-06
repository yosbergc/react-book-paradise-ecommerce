import './books.css'
import { Filters } from '../Filters/Filter'
import { FilterContext } from '../../context/FilterContext.jsx'
import { useBooks } from '../../hooks/useBooks'
import { BookList } from '../BooksList/BookList.jsx'
function Books () {
    const {bookGenresFinal, booksFiltered, filters, handleGenre, handlePages} = useBooks(FilterContext);
    return (
        <section className='main-books'>
            <Filters 
            booksGenres={bookGenresFinal}
            handleGenre={handleGenre}
            handlePages={handlePages}
            filters={filters}
            />
            <section className='books-container'>
                <BookList
                booksFiltered={booksFiltered}
                />
            </section>
        </section>
    )

}
export { Books }