import { FaRegUser } from "react-icons/fa"
import './userloggedheader.css'
function UserLoggedHeader () {
    return (
        <section className='userloggedheadercontainer'>
            <FaRegUser size={20} color="white"/>
        </section>
    )
}
export { UserLoggedHeader }