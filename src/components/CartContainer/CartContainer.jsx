import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export const CartContainer = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    confirmarEmail: '',
  })

  const {cartList, vaciarCarrito, removeProduct, getTotalQuantity, getTotalPrice} = useCartContext()

  const handleOrder = async (evt) => {
    evt.preventDefault()

  }

  const db = getFirestore()
  const orderCollection = collection (db, 'orders')
  addDoc (orderCollection, order)
  .then (resp => console.log(resp))
  .catch (err => console.log(err))


  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value })
  }


  return ( 
    <div>
      {cartList.length > 0 ? (
        <>
          {cartList.map(product => 
            <div key={product.id}>
              <img className="w-25" src={product.img}  />
              Cantidad: {product.cantidad}
              Precio: {product.price}
              <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
          )}

          <div>
            Cantidad total de productos: {getTotalQuantity()}
            Precio total: {getTotalPrice()}
          </div>

          <button className="btn btn-danger" onClick ={vaciarCarrito} >Vaciar Carrito </button>
        </>
      ) : (
        <div>
          <p style={{
            textAlign: 'center',
            fontSize: '2em',
          }}>
            Carrito vacío
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '16px',
          }}>
            <Link to="/" style={{
              backgroundColor: '#333',
              color: '#fff',
              padding: '16px 32px',
              textDecoration: 'none',
            }}>
              Volver al inicio
            </Link>
          </div>
        </div>
      )}
      <form onSubmit={handleOrder} >

        <h2>Formulario de Compra</h2>
        <label>Ingrese Nombre</label>
        <input type="text" placeholder="Nombre" value={formData.nombre} onChange={handleOnChange} />
        <label > Ingrese Apellido</label>
        <input type="text" placeholder="Apellido" value={formData.apellido} onChange={handleOnChange} />
        <label>Ingrese Email</label>
        <input type="text" placeholder="Email" value={formData.email} onChange={handleOnChange} />
        <label>Confirme Email</label>
        <input type ="text" placeholder="Confirmar Email" value={formData.conmail} onChange={handleOnChange} />


      </form>



    </div>
  )
}