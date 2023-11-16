import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ItemList } from "./ItemList/ItemList"


export const ItemListContainer = ({greeting}) => {
   const [products , setProducts] = useState([])
    useEffect(() => {
      mFetch()
        .then(result => setProducts(result))
        .catch(error => console.log(error))
    }, [])

    return (
      <div>
        <div>
          <h2 className="text-center">{greeting}</h2>
          <ItemList products={products} />
        </div>
      </div>
    );
  }
