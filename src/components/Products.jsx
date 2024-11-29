import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const styleProd = {
  display: "flex",
  maxWidth: "1200px",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  gap: "20px",
  flexWrap: "wrap",
}

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data=>setProducts(data))
            .catch(err=> console.log(err))
  },[]);



  return (
    <div style={styleProd}>
      {products.map(product => <ProductCard key={product.id} {...product} />)}
    </div>
  )
}

export default Products
