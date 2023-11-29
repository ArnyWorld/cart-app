import { useItemsCart } from "./hooks/useItemsCart";
import { NavBar } from "./components/NavBar";
import { CartRoutes } from "./routes/CartRoutes";



export const CartApp = ()=>{
    const {cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();
    //const [cartItems, setCartItems] = useState(initialCartItems);
        
    return (
        <>
        <NavBar/>
        <div className="container mt-5">
        <h3 className="text-dark">Cart App</h3>
        <CartRoutes cartItems={cartItems} handlerAddProductCart={handlerAddProductCart} handlerDeleteProductCart={handlerDeleteProductCart} />  

        </div>
        </>
    );
}