import React from "react";
import Ebooks from '../mockups/books.json'
const booksArray = Ebooks.library
function useBooks(FilterContext) {
    const {filters, handleGenre, handlePages} = React.useContext(FilterContext)
    const [books] = React.useState(booksArray);
    const booksGenres = books.map(book => book.book.genre)
    const bookSet = new Set(booksGenres);
    const bookGenresFinal = [...bookSet]
    const booksFiltered = books.filter(book => {
        const genero = filters.genre === 'Todos' || book.book.genre === filters.genre;
        const pages = filters.pages === 0 || book.book.pages >= filters.pages;
        const query = filters.query === '' || book.book.title.toLowerCase().startsWith(filters.query.toLowerCase());
        return genero && pages && query;
    })
    return {bookGenresFinal, booksFiltered, filters, handleGenre, handlePages}
}
export { useBooks }