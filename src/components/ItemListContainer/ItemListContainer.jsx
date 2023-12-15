import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mFetch } from '../../helpers/mFetch'
import { ItemList } from './ItemList/ItemList'
import { getDocs } from 'firebase/firestore'
import { getFirestore, collection, query, where } from 'firebase/firestore'

const Loading = () => {
  return <h2>Cargando... </h2>
}

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { cid } = useParams()


  useEffect(() => {

    const dbFirestore = getFirestore()

    const queryCollection = collection(dbFirestore, 'products')

    if (cid) {
      const queryFilter = query(
        queryCollection,
        where('category', '==', cid)
      )

      getDocs(queryFilter)
        .then((resp) => setProducts(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    } else {
      getDocs(queryCollection)
        .then((resp) => setProducts(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [cid])

  return (
    <div>
      <h2> {greeting}</h2>

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
        <ItemList productos={productos} />
      )}
    </div>
  )
}
