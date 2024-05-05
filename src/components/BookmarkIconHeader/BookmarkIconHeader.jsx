import { FaRegBookmark } from "react-icons/fa"
import './bookmarkiconheader.css'
import { cartContext } from '../../context/CartContext'
import { useContext } from 'react'
function BookmarkIconHeader () {
    const {handleCartVisible} = useContext(cartContext)
    return (
        <section className="bookmarkIconContainer" onClick={handleCartVisible}>
            <FaRegBookmark size={25}/>
            <p>0</p>
        </section>
    )
}
export { BookmarkIconHeader}