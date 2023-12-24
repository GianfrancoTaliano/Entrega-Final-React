import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ product }) => {
    return (
        <div className="card w-25" style={{ marginTop: '20px' }}> 
            <div className="card-body p-0 text-center d-flex align-items-center justify-content-center" style={{ height: '300px' }}>
                <img
                    src={product.img}
                    className="card-img-top img-fluid"
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                    alt="imagen"
                />
            </div>
            <div className="card-footer">
                <h4 className="text-center">{product.name}</h4>
                <p className="text-center">Precio: {product.price}</p>
                <p className="text-center">Stock: {product.stock}</p>
                <Link to={`/detalle/${product.id} `} className="btn btn-primary d-block mx-auto">Detalle</Link>
            </div>
        </div>
    )
}

