import React from "react";

const cartContext = React.createContext();

function CartProvider({children}) {
    const [cart, setCart] = React.useState([])
    const [isCartVisible, setCartVisible] = React.useState(false);
    const handleCartVisible = () => {
        setCartVisible(!isCartVisible)
    }
    const addBookToCart = (book) => {
        const newCart = [...cart]
        newCart.push(book)
        setCart(newCart)
    }
    return <cartContext.Provider
    value={{
        cart,
        addBookToCart,
        isCartVisible,
        handleCartVisible
    }}>
        {children}
    </cartContext.Provider>
}
export {cartContext, CartProvider}