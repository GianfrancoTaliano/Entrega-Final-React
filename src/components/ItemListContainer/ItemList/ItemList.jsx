const Filter = ({children}) => {
    return (
        {children}


    )
    }
export const ItemList = ({products}) => {
  return (

    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {products.map((product) => (
      <div key={product.id} style={{ width: "300px", margin: "10px", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <img src={product.img} style={{ width: "100%", height: "200px", objectFit: "contain", borderBottom: "1px solid #eee", marginBottom: "10px" }} alt={product.name} />
          <h4>{product.name}</h4>
          <p>Precio: {product.price}</p>
          <p>Stock: {product.stock}</p>
          <button className="btn btn-primary">Comprar</button>
        </div>
        <div style={{ padding: "10px", textAlign: "center" }}>
          <button className="btn btn-primary">Ver Detalle</button>
        </div>
      </div>
    ))}
  </div>
    
  )
}
