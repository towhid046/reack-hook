import { useState } from "react";
import Cart from "../Cart/Cart";

const Product = () => {
    const [maxItems, setMaxItems] = useState(10)
    const [cartItem, setcartItem] = useState(0)
 
    const addItemToCart = () => {
        setMaxItems(maxItems > 0 ? maxItems - 1 : 0)
        setcartItem(maxItems >= 1 ? cartItem + 1 : cartItem)
    }
    const removeCartItem = () => {
        cartItem > 0 && setcartItem((cartItem - 1)) + setMaxItems(maxItems + 1)
    }
  
    return(
        <>
        <div>
            <Cart cartItem={cartItem}/>
            <button onClick={addItemToCart} >Add to card</button> <br />
            <button onClick={removeCartItem} >Remove from card</button>
            <h2>Total: {cartItem}</h2>            
            <h1>Max items: {maxItems}</h1>

        </div>
        </>
    )
}

export default Product;
