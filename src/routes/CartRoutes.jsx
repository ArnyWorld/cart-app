import { Navigate, Route, Routes } from "react-router-dom"
import { CartView } from "../components/CartView"
import { CatalogView } from "../components/CatalogView"

export const CartRoutes = ({handlerAddProductCart, cartItems, handlerDeleteProductCart})=>{
    return (
        <Routes>
        <Route path="catalog" element={<CatalogView handler={handlerAddProductCart}/>}
        />
        <Route path="cart" element={ (
            cartItems?.length <= 0 ? <div className="alert alert-warning">No existen productos registrados aún</div> : (
                <div className="row d-flex justify-content-center">
                <div className="my-4 col-12 col-lg-8 ">
                    <CartView handlerDelete={handlerDeleteProductCart} items={cartItems}/>          
                </div>
                </div>
                )
        )
        }
        />
        <Route path="/" element={<Navigate to={'/catalog'}/>}/>
            
    </Routes>
    )
}