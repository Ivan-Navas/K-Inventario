import { stock } from "../data/Stock";
import '../style/listStock.css'
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";
console.log(stock);

export function ListStock({ products }) {
  if (products.length === 0) {
    return <h2 className="defaultTitle">No hay productos agregados</h2>;
  }
  return (
    <div  className='main'>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h2 className="nombre">{product.name}</h2>
          <p className="info">Cantidad disponible: {product.amount}</p>
          <p className="info">Precio: {product.price}</p>
          <div className="buttonscontainer">
            <button  className="action"> <AiFillEdit title="Editar" className="buttonAction"/></button>
            <button  className="action"> <AiFillCloseCircle title="Eliminar"className="buttonAction"/></button>
          </div>
        </div>
      ))}
    </div>
  );
}
