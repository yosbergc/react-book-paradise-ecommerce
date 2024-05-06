import './BookSingleWish.css'
function BookSingleWish ({bookName, bookImage, deleteBookofCart}) {
    return (
        <section className="booksingle-wish">
            <img src={bookImage} alt={bookName} />
            <section className='booksingle-wish-info'>
                <h4>{bookName}</h4>
                <button onClick={deleteBookofCart}>Eliminar de mi lista</button>
            </section>
        </section>
    )
}
export { BookSingleWish }