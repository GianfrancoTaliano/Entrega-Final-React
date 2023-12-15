 import { createContext, useContext, useState } from 'react'
 

 const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {

    const [cartList , setCartList] = useState([])

    const addProduct = (newProduct) => {
        const existingProduct = cartList.find(product => product.id === newProduct.id);

        if (existingProduct) {
            
            setCartList(cartList.map(product => 
                product.id === newProduct.id 
                ? {...product, cantidad: product.cantidad + newProduct.cantidad, price: product.price + newProduct.price} 
                : product
            ))
        } else {
           
            setCartList([...cartList, newProduct]);
        }
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const removeProduct = (id) => {
        setCartList(cartList.filter(product => product.id !== id))
    }

    const getTotalQuantity = () => {
        return cartList.reduce((total, product) => total + product.cantidad, 0);
    }

    const getTotalPrice = () => {
        return cartList.reduce((total, product) => total + product.price * product.cantidad, 0);
    }

    return (
        <CartContext.Provider value={{
            addProduct,
            vaciarCarrito,
            cartList,
            removeProduct,
            getTotalQuantity,
            getTotalPrice,
        }} >
            {children}
        </CartContext.Provider>
    )
}