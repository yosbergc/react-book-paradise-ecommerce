import Ebooks from '../../mockups/books.json'
import './books.css'
const booksArray = Ebooks.library
import React from 'react'
import { BookSingle } from '../BookSingle/BookSingle';
function Books () {
    const [books, setBooks] = React.useState(booksArray);
    return (
        <section className='books-container'>
            {books.map(book => {
                    return <BookSingle
                        key={book.book.ISBN}
                        bookImg={book.book.cover}
                        bookName={book.book.title}
                        bookGenre={book.book.genre}
                        />
                })}
        </section>
    )

}
export { Books }