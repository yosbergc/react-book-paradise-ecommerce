import { FaRegBookmark } from "react-icons/fa"
import './bookmarkiconheader.css'
function BookmarkIconHeader () {
    return (
        <section className="bookmarkIconContainer">
            <FaRegBookmark size={25}/>
            <p>20
            </p>
        </section>
    )
}
export { BookmarkIconHeader}