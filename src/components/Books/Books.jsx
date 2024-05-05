import Ebooks from '../../mockups/books.json'
import './books.css'
const booksArray = Ebooks.library
import React from 'react'
import { BookSingle } from '../BookSingle/BookSingle'
import { Filters } from '../Filters/Filter'
const InitialFilters = {
    query: '',
    genre: 'Todos',
    pages: 0
}

function Books () {
    const [books, setBooks] = React.useState(booksArray);
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
    const booksGenres = books.map(book => book.book.genre)
    const bookSet = new Set(booksGenres);
    const bookGenresFinal = [...bookSet]
    const booksFiltered = books.filter(book => {
        const genero = filters.genre === 'Todos' || book.book.genre === filters.genre;
        const pages = filters.pages === 0 || book.book.pages >= filters.pages;
        const query = filters.query === '' || book.book.title.startsWith(filters.query);
    
        return genero && pages && query;
    })
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
                            />
                    })}
            </section>
        </section>
    )

}
export { Books }