import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";


const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const useItemsCart = ()=>{
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);
    useEffect(()=>{
        sessionStorage.setItem("cart", JSON.stringify(cartItems))
    },[cartItems])
    const handlerAddProductCart = (product)=>{
        const hasItem = cartItems.find((i)=>i.product.id==product.id)
        if(hasItem){
            // setCartItems([...cartItems.filter((i)=>i.product.id!==product.id),
            // {
            //     product,
            //     quantity:hasItem.quantity+1
            // }])
            
            
            // setCartItems(cartItems.map((i)=>{
            //     if(i.product.id===product.id){
            //         i.quantity++
            //     }
            //     return i;
            // })
            //     )
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product
                }
            )
        }else{
            // setCartItems([...cartItems,{product,quantity:1}])
            dispatch(
                {
                    type:AddProductCart,
                    payload:product
                }
            )
        }
    }

    const handlerDeleteProductCart =(id)=>{
        //setCartItems([...cartItems.filter((i)=>i.product.id!==id)])
        dispatch(
            {
                type:DeleteProductCart,
                payload:id
            }
        )
        sessionStorage.removeItem("cart");
        sessionStorage.setItem("cart",JSON.stringify(cartItems));
    }

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart
    }
}