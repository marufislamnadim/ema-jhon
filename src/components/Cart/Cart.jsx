import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total =0 ;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        total += (product.price * product.quantity);
        totalShipping += product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = (total*7/100).toFixed(2);

    const totalPrice = (total+totalShipping+parseFloat(tax)).toFixed(2);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected items {quantity}</p>
            <p>Sub Total Price: {total}</p>
            <p>Shipping Charge: {totalShipping}</p>
            <p>TAX: {tax}</p>
            <p>TOTAL AMOUNT: {totalPrice}</p>
        </div>
    );
};

export default Cart;