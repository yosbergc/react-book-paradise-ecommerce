import './BookSingleWish.css'
function BookSingleWish ({bookName, bookImage}) {
    return (
        <section className="booksingle-wish">
            <img src={bookImage} alt={bookName} />
            <h4>{bookName}</h4>
            <button>Eliminar de mi lista</button>
        </section>
    )
}
export { BookSingleWish }