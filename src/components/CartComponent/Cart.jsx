import './cart.css'
import { IoIosClose } from "react-icons/io"
import { cartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { BookSingleWish } from '../BookSingleWish/BookSingleWish'
function CartComponent() {
    const {cart, handleCartVisible, deleteBookofCart} = useContext(cartContext)
    return (
        <section className='CartComponent'>
            <section className='up'>
                <h2>El carrito</h2>
                <IoIosClose size={30} onClick={handleCartVisible}/>
            </section>
            <section className='cart-product-list'>
                {cart.map(book => <BookSingleWish
                    key={book.book.ISBN}
                    bookName={book.book.title}
                    bookImage={book.book.cover}
                    deleteBookofCart={() => {deleteBookofCart(book.book.ISBN)}}
                    />)}
            </section>
        </section>
    )
}
export { CartComponent }