import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Home";
import Products from "../Products";
import Contact from "../Contact";
import About from "../About";
import Navbar from "../Navbar";
import ProductDetails from "../ProductDetails";
import ProductLayout from "./ProductLayout";



const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
}

function RootLayout() {
  return (
    <BrowserRouter>
        <Navbar />
        <div style={divStyle}>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="products" element={<ProductLayout />}>
              <Route index element={<Products/>}/>
              <Route path=":id" element={<ProductDetails/>}/>
            </Route>
            <Route path="contact" element={<Contact />}/>
            <Route path="about" element={<About />}/>
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default RootLayout


