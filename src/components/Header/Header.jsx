import { UserLoggedHeader } from "../UserLoggedHeader/UserLoggedHeader"
import './header.css'
function Header () {
    return (
        <header>
            <h2>Paraíso del libro</h2>
            <section className="secondPart">
                
                <UserLoggedHeader />
            </section>
            
            
        </header>
    )
}
export { Header }