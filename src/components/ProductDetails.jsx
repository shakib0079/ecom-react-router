import { useEffect, useState } from "react";
import { useParams } from "react-router"



function ProductDetails() {
    const [productData, setProductData]=useState({})

    const {id} = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProductData(data))
        .catch(err => console.log(err))
    },[id]);

    // const rate = Math.round(productData.rating.rate)
    

    function renderStars(rate) {
        const yellowStar = "⭐"; // Emoji for yellow star
        const whiteStar = "☆";  // Emoji for white star
      
        return yellowStar.repeat(rate) + whiteStar.repeat(5 - rate);
    }
    return (
        <div style={{display: "flex",justifyContent: "space-around", alignItems: "center", width:"80%", marginTop: "20px"}}>
            <img width="250px" src={productData.image} alt="" />
            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                <h3 style={{width: "400px"}}>{productData.title}</h3>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <p><span>{productData.rating && renderStars(Math.floor(productData.rating.rate))}</span>({productData.rating && productData.rating.count})</p>
                    <h2 style={{fontSize: "32px"}}>${productData.price}</h2>
                </div>
                <p style={{width: "400px", textAlign: "justify"}}>{productData.description}</p>
                <button style={{width: "400px", padding: "10px", fontSize: "20px", background: "#719df2", color: "white", border: "none", borderRadius: "5px"}}>Add To Cart</button>
            </div>
            
        </div>
    )
}

export default ProductDetails
