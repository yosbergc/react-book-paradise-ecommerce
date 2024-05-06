import React from "react";

const cartContext = React.createContext();

function CartProvider({children}) {
    const [cart, setCart] = React.useState([])
    const [isCartVisible, setCartVisible] = React.useState(false);
    const handleCartVisible = () => {
        setCartVisible(!isCartVisible)
    }
    const addBookToCart = (newBook) => {
        const newCart = [...cart]
        const isProductInCard = newCart.some(book => book.book.ISBN === newBook.book.ISBN )
        if (isProductInCard) return
        newCart.push(newBook)
        setCart(newCart)
    }
    const deleteBookofCart = (id) => {
        const newCart = [...cart]
        const productIndex = newCart.findIndex(book => book.book.ISBN === id);
        newCart.splice(productIndex, 1);
        setCart(newCart)
    }
    return <cartContext.Provider
    value={{
        cart,
        addBookToCart,
        isCartVisible,
        handleCartVisible,
        deleteBookofCart
    }}>
        {children}
    </cartContext.Provider>
}
export {cartContext, CartProvider}