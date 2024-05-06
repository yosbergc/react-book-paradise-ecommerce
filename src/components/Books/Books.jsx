import './books.css'
import { BookSingle } from '../BookSingle/BookSingle'
import { Filters } from '../Filters/Filter'
import { cartContext } from '../../context/CartContext'
import { useContext } from 'react'
function Books ({bookGenresFinal, booksFiltered, filters, handleGenre, handlePages}) {
    const {addBookToCart} = useContext(cartContext)
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
                            addBookToCart={() => {addBookToCart(book)}}
                            />
                    })}
            </section>
        </section>
    )

}
export { Books }