import { FaRegBookmark } from "react-icons/fa"
import './bookmarkiconheader.css'
import { cartContext } from '../../context/CartContext'
import { useContext } from 'react'
function BookmarkIconHeader () {
    const {handleCartVisible, cart} = useContext(cartContext)
    return (
        <section className="bookmark">
            <section className="bookmarkIconContainer" onClick={handleCartVisible}>
            <FaRegBookmark size={25}/>
            <p>{cart.length}</p>
            </section>
        </section>
    )
}
export { BookmarkIconHeader}