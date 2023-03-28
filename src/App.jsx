import "./App.css";
import ProductForm from "./components/ProductForm";
import { ListStock } from "./components/ListStock";
import { stock } from "./data/Stock";
import { useEffect, useState } from "react";

function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    setProduct(stock);
  }, []);

  const addProduct = (nameproduct, amount, price) => {
    setProduct([...products, {
      name: nameproduct,
      id: products.length,
      amount: amount,
      price: price
    }]);
  };
  return (
    <div className="App">
      <ProductForm 
      addProduct={addProduct}
      />
      <ListStock products={products} />
    </div>
  );
}

export default App;
