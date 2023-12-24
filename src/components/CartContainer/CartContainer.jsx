import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { Card, Button, ListGroup } from 'react-bootstrap'
import { addDoc, collection, getFirestore } from "firebase/firestore"

export const CartContainer = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    confirmarEmail: '',
  })

  const [isId, setIsId] = useState('')

  const { cartList, vaciarCarrito, removeProduct, getTotalQuantity, getTotalPrice } = useCartContext()

  const handleOrder = async (event) => {
    event.preventDefault()

    for (let field in formData) {
      if (!formData[field]) {
        alert('Por favor, completa todos los campos del formulario.');
        return;
      }
    }
    

    const order = {}
    order.buyer = formData
    order.items = cartList.map(({ id, name, price }) => ({ id, name, price }))
    order.total = getTotalPrice()

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order)
      .then(resp => setIsId(resp.id))
      .catch(error => console.log(error))
      .finally (() => vaciarCarrito()) 
      
  }

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="container mt-4">
      {isId  !== '' && <label> La orden de compra es: {isId}</label> }
      {cartList.length > 0 ? (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {cartList.map(product =>
              <Card style={{ width: '18rem' }} className="mb-4" key={product.id}>
                <div style={{ width: '100%', height: '200px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Card.Img variant="top" src={product.img} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cantidad: {product.cantidad}</ListGroup.Item>
                    <ListGroup.Item>Precio: {product.price}</ListGroup.Item>
                    <ListGroup.Item>Subtotal: {product.price * product.cantidad}</ListGroup.Item>
                  </ListGroup>
                  <Button variant="danger" onClick={() => removeProduct(product.id)}>Eliminar</Button>
                </Card.Body>
              </Card>
            )}
          </div>
          <div className="mt-4">
            <p>Cantidad total de productos: {getTotalQuantity()}</p>
            <p>Precio total: {getTotalPrice()}</p>
            <Button variant="danger" onClick={vaciarCarrito}>Vaciar Carrito</Button>
          </div>
          <form className="mt-4" onSubmit={handleOrder}>
  <div className="mb-3">
    <label className="form-label">Nombre</label>
    <input
      className="form-control"
      type="text"
      name="nombre"
      value={formData.nombre}
      onChange={handleOnChange}
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Apellido</label>
    <input
      className="form-control"
      type="text"
      name="apellido"
      value={formData.apellido}
      onChange={handleOnChange}
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Email</label>
    <input
      className="form-control"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleOnChange}
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Confirmar Email</label>
    <input
      className="form-control"
      type="email"
      name="confirmarEmail"
      value={formData.confirmarEmail}
      onChange={handleOnChange}
    />
  </div>

  <button className="btn btn-primary" type="submit">Terminar Compra</button>
</form>

        </>
      ) : (
        <div className="text-center mt-4">
          <p style={{ fontSize: '2em' }}>Carrito vacío</p>
          <Link to="/" className="btn btn-primary mt-4">Volver al inicio</Link>
        </div>
      )}
    </div>
  )
}




