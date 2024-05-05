import './cart.css'
import { IoIosClose } from "react-icons/io"
import { cartContext } from '../../context/CartContext'
import { useContext } from 'react'
function CartComponent() {
    const {cart, handleCartVisible} = useContext(cartContext)
    return (
        <section className='CartComponent'>
            <section className='up'>
                <h2>El carrito</h2>
                <IoIosClose size={30} onClick={handleCartVisible}/>
            </section>
            <section className='cart-product-list'>
                {cart.map(product => <p key={product}>{product}</p>)}
            </section>
        </section>
    )
}
export { CartComponent }