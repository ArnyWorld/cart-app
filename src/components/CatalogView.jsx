import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({handler})=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        setProducts(getProducts())
    },[]);

    return (
        <>
           <div className="row">
                {
                    products.map(prod=>(
                        <div className="col-lg-4 col-md-6 col-12 my-2" key={prod.id}>
                            <ProductCardView handler={handler} id={prod.id} name={prod.name} description = {prod.description} price = {prod.price}/>
                        </div>

                    ))
                }
            </div>
        </>
    )
}