import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Books } from './components/Books/Books'
import { CartComponent } from './components/CartComponent/Cart'
import { cartContext } from './context/CartContext'
import { useBooks } from './hooks/useBooks'
import { FilterContext } from './context/FilterContext.jsx'
import React from 'react'
function App() {
  const {bookGenresFinal, booksFiltered, filters, handleGenre, handlePages} = useBooks(FilterContext);
  const {isCartVisible} = React.useContext(cartContext)
  return (
    <>
      <Header />
      <Hero />
      <Books bookGenresFinal={bookGenresFinal} booksFiltered={booksFiltered} filters={filters} handleGenre={handleGenre} handlePages={handlePages} />
      {isCartVisible && <CartComponent />}
    </>
  )
}

export default App
