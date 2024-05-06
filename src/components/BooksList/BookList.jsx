import { BookSingle } from '../BookSingle/BookSingle'
import { cartContext } from '../../context/CartContext'
import { useContext } from 'react'
function BookList({ booksFiltered }) {
    const {addBookToCart, cart, deleteBookofCart} = useContext(cartContext)
    const isProductInCart = (product) => {
        return cart.some(book => book.book.ISBN === product.book.ISBN)
    }
    return <>
    {booksFiltered.map(book => <BookSingle
            key={book.book.ISBN}
            bookImg={book.book.cover}
            bookName={book.book.title}
            bookGenre={book.book.genre}
            bookInfo={book.book.synopsis}
            addBookToCart={() => {addBookToCart(book)}}
            isProductInCart={isProductInCart(book)}
            deleteBookofCart={() => {deleteBookofCart(book.book.ISBN)}}
            />)}
    </>
}
export { BookList }