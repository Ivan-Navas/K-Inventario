import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import '../style/productForm.css'

function ProductForm({addProduct}) {
  const [name, setName] = useState("");
  const [amount, setAmaunt] = useState("");
  const [price, setPrice] = useState("");

  const names = (e) => {
    setName(e.target.value);
  }
  const amaunts = (e) => {
    setAmaunt(e.target.value);
  }
  const prices = (e) => {
    setPrice(e.target.value);
  }


  const handleForm = (e)=>{
    e.preventDefault();
    
    addProduct(name,amount,price);
  }
  return (
    <form onSubmit={handleForm} className="container">
      <input type="text" placeholder="Producto" className="input" required onChange={names}/>
      <input type="number" placeholder="Precio" className="input" required onChange={prices}/>
      <input type="number" placeholder="Cantidad" className="input" required onChange={amaunts}/>
      <button  className="boton">
        <BsFillPlusCircleFill className="icono" title="Agregar"/>
      </button>
    </form>
  );
}

export default ProductForm;
