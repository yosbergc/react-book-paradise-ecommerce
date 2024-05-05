import { UserLoggedHeader } from "../UserLoggedHeader/UserLoggedHeader"
import { BookmarkIconHeader } from "../BookmarkIconHeader/BookmarkIconHeader"
import './header.css'
function Header () {
    return (
        <header>
            <h2>Paraíso del libro</h2>
            <section className="secondPart">
                <BookmarkIconHeader />
                <UserLoggedHeader />
            </section>
            
            
        </header>
    )
}
export { Header }