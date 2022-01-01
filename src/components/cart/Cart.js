import React from "react";
import "./Cart.scss";
const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  // console.log(cartItems);
  const itemPrice= cartItems.reduce((a,c)=>a+c.qty*c.price,0);
  const taxPrice=itemPrice*0.14;
  const shippingCharge=itemPrice > 500 ? 0 : 50;
  const totalPrize=itemPrice+taxPrice+shippingCharge;
  return (
    <div className=" cart ">
      <h2>Cart</h2>
      <div className='cartItems'>
        {cartItems.length === 0 && (
          <div style={{ fontWeight: "600", marginTop: "1rem" }}>
            Cart is empty...
          </div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button className="remove" onClick={() => onRemove(item)}>
                -
              </button>
              <button className="add" onClick={() => onAdd(item)}>
                +
              </button>
            </div>
            <div className="col-2 text-right">
              {item.qty}*${item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      {cartItems.length!==0 &&(
          <>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <hr></hr>
            <div className="row rownew" >
              <div className="col-2">Item Price</div>
              <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
            </div>
            <hr />
            <div className="row rownew">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <hr />
            <div className="row rownew">
              <div className="col-2">Shipping Charges</div>
              <div className="col-1 text-right">${shippingCharge.toFixed(2)}</div>
            </div>
            <hr />
            <hr />
            <hr />
            <div className="row rownew">
              <div className="col-2">Total Price</div>
              <div className="col-1 text-right">${totalPrize.toFixed(2)}</div>
            </div>

            <div>
              <button onClick={()=>alert('checkout')}>Checkout</button>
            </div>
          </>
        )}  
    </div>
  );
};

export default Cart;
