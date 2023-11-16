import './App.css'
import { ItemCounter } from './components/ItemCounter/ItemCounter'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const onAdd = (cantidad) => {
    console.log( "la cantidad seleccionada es:", cantidad)
  }
  return (
    <>
    <div className="container" >
     <NavBar />
     <ItemListContainer greeting="Bienvenido" />
     <ItemCounter initial={1} stock={6} onAdd={onAdd} />
     </div>
    </>
  )
}

export default App
