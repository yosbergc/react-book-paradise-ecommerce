import './booksingle.css'
import { FaRegBookmark } from "react-icons/fa"
function BookSingle ({ bookImg, bookName, bookGenre, bookInfo, addBookToCart }) {
    return (<article className="BookSingleContainer">
        <img src={bookImg} alt={bookName} />
        <h3>{bookName}</h3>
        <p>{bookInfo}</p>
        <div>
            <span className='genre'>{bookGenre}</span>
            <button onClick={addBookToCart}><FaRegBookmark size={20} color='white'/></button>
        </div>
    </article>)
}
export { BookSingle }