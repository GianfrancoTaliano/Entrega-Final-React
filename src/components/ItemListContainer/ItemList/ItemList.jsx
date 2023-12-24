
import { Item } from "../Item/Item"


export const ItemList  = ({ productos }) => {
  return (
    <div style={{ 
      display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
      {productos.map(product => <Item key={product.id} product={product} />)}

    </div>
  );
}




 