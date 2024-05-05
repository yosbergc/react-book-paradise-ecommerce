import './hero.css'
import HeroImage from '../../assets/img/Ebook-hero-image.png'
import { Search } from '../Search/Search'
function Hero () {
    return (
        <section className="hero">
            <section className='info-hero'>
                <h2>Lecturas sin Fronteras: Tu Biblioteca En Línea</h2>
                <p>Usa nuestro buscador para poder encontrar tu libro favorito en nuestro catálogo de libros.</p>
                <Search/>
            </section>
            <section>
                <img src={HeroImage} alt='Hero Image'/>
            </section>
        </section>
    )
}
export { Hero }