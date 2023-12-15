
import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"
import { ItemCounter } from "../../ItemCounter/ItemCounter"
import { Link } from "react-router-dom"



export const ItemDetail = ({product}) => {

  const [isCounter, setCounter] = useState(true)

  const {addProduct}  = useCartContext ()

    const onAdd = (cantidad) => {
        
        addProduct({...product, cantidad})
        setCounter(false)
      }





  return (
<div className="row">
  <div className="col-md-6 d-flex align-items-center justify-content-end">
    <div
      className="p-4 border"
      style={{ maxWidth: '300px', width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <img
        src={product.img}
        alt={product.name}
        className="img-fluid"
        style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
      />
    </div>
  </div>
  <div className="col-md-6">
    <div className="text-center mt-5">
      <h1>Detalle del Producto</h1>
    </div>
    <h2>{product.name}</h2>
    <div className="mt-3">
      <h4>Descripción: {product.description}</h4>
      <h4>Precio: {product.price}</h4>
      <h4>Stock: {product.stock}</h4>
      {

        isCounter ?

        <ItemCounter onAdd={onAdd} initial={1} stock={product.stock} />  

        :

        <>
        <Link to="/cart" className="btn btn-primary">Terminar mi Compra</Link>
        <Link to="/" className="btn btn-primary">Seguir Comprando</Link>
        
        </>
        
      }  



     


    </div>
  </div>
</div>






  )
}
