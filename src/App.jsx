import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Books } from './components/Books/Books'
import { CartComponent } from './components/CartComponent/Cart'
import { cartContext } from './context/CartContext'
import React from 'react'
function App() {
  const {isCartVisible} = React.useContext(cartContext)
  return (
    <>
      <Header />
      <Hero />
      <Books />
      {isCartVisible && <CartComponent />}
    </>
  )
}

export default App
