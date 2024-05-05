import './booksingle.css'
function BookSingle ({ bookImg, bookName, bookGenre }) {
    return (<article className="BookSingleContainer">
        <img src={bookImg} alt={bookName} />
        <h3>{bookName}</h3>
        <span className='genre'>{bookGenre}</span>
    </article>)
}
export { BookSingle }