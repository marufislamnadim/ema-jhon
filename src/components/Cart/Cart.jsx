import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total =0 ;
    let totalShipping = 0;
    for (const product of cart) {
        total += product.price;
        totalShipping += product.shipping;
    }

    const tax = (total*7/100).toFixed(2);

    const totalPrice = (total+totalShipping+parseFloat(tax)).toFixed(2);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected items {cart.length}</p>
            <p>Sub Total Price: {total}</p>
            <p>Shipping Charge: {totalShipping}</p>
            <p>TAX: {tax}</p>
            <p>TOTAL AMOUNT: {totalPrice}</p>
        </div>
    );
};

export default Cart;