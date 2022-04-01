import { useEffect, useState } from "react"
import { getStoreCart } from "../utilities/fakedb";

const useCart =(products)=>{
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        const storedCart= getStoreCart()
        const savedCart=[];
        for(const id in storedCart){
            const addproducts = products.find(product=> product.id===id)
            if(addproducts){
                const quantity = storedCart[id]
                addproducts.quantity= quantity
                savedCart.push(addproducts)
            }
        }
        setCart(savedCart)
    },[products])
return [cart, setCart]

}
export default useCart;