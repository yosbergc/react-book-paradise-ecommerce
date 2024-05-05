import './books.css'
import { BookSingle } from '../BookSingle/BookSingle'
import { Filters } from '../Filters/Filter'
import { useBooks } from '../../hooks/useBooks'

function Books () {
    const {bookGenresFinal, booksFiltered, filters, handleGenre, handlePages} = useBooks();
    return (
        <section className='main-books'>
            <Filters booksGenres={bookGenresFinal} handleGenre={handleGenre} handlePages={handlePages} filters={filters}/>
            <section className='books-container'>
                {booksFiltered.map(book => {
                        return <BookSingle
                            key={book.book.ISBN}
                            bookImg={book.book.cover}
                            bookName={book.book.title}
                            bookGenre={book.book.genre}
                            bookInfo={book.book.synopsis}
                            />
                    })}
            </section>
        </section>
    )

}
export { Books }