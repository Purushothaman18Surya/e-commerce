import { useEffect, useState } from "react";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";



function Home(){
    const [products, setProducts]  = useState([]);

    useEffect( ()=>{
        fetch("Product.json")
        .then((res)=>res.json())
        .then((res)=>{
            setProducts(res);
            console.log(products.length);
        });


    },[]);
    
    
    
  






    return(<div>

        
        <Header />
    <h1>this is Home page</h1>
    {/* <ProductCard /> */}
    <div >

        <div className="row">
        {products.map((product , i)=>(
             <div className="col-3">
             <ProductCard item = {product} index = {i} />
             </div>
             ))}
   

        </div>
        
    </div>
    <Footer />
    </div>);
}



export default Home;