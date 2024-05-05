import React from "react";

const cartContext = React.createContext();

function CartProvider({children}) {
    const [cart, setCart] = React.useState([])
    const [isCartVisible, setCartVisible] = React.useState(false);
    const handleCartVisible = () => {
        setCartVisible(!isCartVisible)
  }
    return <cartContext.Provider
    value={{
        cart,
        setCart,
        isCartVisible,
        handleCartVisible
    }}>
        {children}
    </cartContext.Provider>
}
export {cartContext, CartProvider}