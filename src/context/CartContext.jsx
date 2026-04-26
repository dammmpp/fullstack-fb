import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const existe = prevCarrito.find(item => item.id === producto.id)
            if (existe) {
                return prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            } else {
                return [...prevCarrito, { ...producto, cantidad: 1 }]
            }
        })
    }

    const eliminarDelCarrito = (id) => {
        setCarrito((prevCarrito) => {
            const producto = prevCarrito.find(item => item.id === id)
            if (producto && producto.cantidad > 1) {
                return prevCarrito.map(item =>
                    item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
                )
            } else {
                return prevCarrito.filter(item => item.id !== id)
            }
        })
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    return (
        <CartContext.Provider value={{ 
            carrito, 
            agregarCarrito, 
            eliminarDelCarrito, 
            vaciarCarrito 
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext