import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mFetch"
import { ItemDetail } from "./ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"


const Loading = () => {
  return <h2>Cargando... </h2>
}

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { pid } = useParams();


  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore, 'products', pid)
    getDoc(queryDoc)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  } , [pid])

  


return (
  <div>
  
    {loading ? (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Loading />
      </div>
    ) : (
      <ItemDetail product={product} />
    )}
  </div>
)
}