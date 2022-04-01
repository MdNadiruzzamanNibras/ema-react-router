import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props)
    const {cart, children} = props
    console.log(cart)
    let total =0;
    let shipping= 0;
    let quantity =0
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total *0.1).toFixed(2));
    const GrandTotal =total+ shipping + tax
    return (
        <div className='cart'>
            <h4 className='center'>Order summary</h4>
            <p>Selected Item: {cart.length} </p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${GrandTotal.toFixed(2)}</h4>
            {children}
        </div>
    );
};

export default Cart;