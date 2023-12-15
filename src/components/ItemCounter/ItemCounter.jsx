
import { useCounter } from "../../hooks/useCounter";

export const ItemCounter = ({ initial = 1, stock = 5, onAdd }) => {
  const { counter, handleRestar, handleSumar } = useCounter(initial, stock)

  const handleOnAdd = () => {
    onAdd(counter)
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={`Cantidad: ${counter}`}
            readOnly
            style={{ height: "38px", fontSize: "1rem" }}
          />
          <button
            onClick={handleRestar}
            className="btn btn-danger mr-2 btn-lg"
            disabled={counter <= 1}
            style={{ height: "38px", fontSize: "1rem" }}
          >
            -
          </button>
          <button
            onClick={handleSumar}
            className="btn btn-primary btn-lg"
            disabled={counter >= stock}
            style={{ height: "38px", fontSize: "1rem" }}
          >
            +
          </button>
        </div>
        <div className="col-md-6">
          <button
            onClick={handleOnAdd}
            className="btn btn-success btn-lg d-block w-100"
            disabled={counter <= 0 || counter > stock}
            style={{ fontSize: "1rem" }}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  )
}
