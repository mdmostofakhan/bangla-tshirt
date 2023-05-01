import React from 'react';
import './Cart.css'

const Cart = ({cart,handleAddRemoveFrom }) => {
     let message;
     if(cart.length === 0){
        message = <p>Please add some products</p>
     }
     else {
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
     }
    return (
        <div>
            <h3 className={cart.length === 1 ? 'blue': 'red'}>Order Summary:{cart.length}</h3>
            <p className={`bold border ${cart.length === 3? 'purple': 'yellow'}`}>something</p>
            {cart.length > 2 ? <span className='purple'>Aro Kino</span> : <span>fokira</span> }
            {message}
            {
                cart.map(tshirt => <p
                key={tshirt.id}
                >{tshirt.name} <button 
                onClick={() => handleAddRemoveFrom(tshirt._id) }>x</button> </p>)
            }
            { 
              cart.length === 2 && <p>Double bonanze!!</p> 
            }
            {
                cart.length === 3 || <h3>Thinta toh holo na!!</h3>
            }
        </div>
    )}

export default Cart;

/*
 *conditional rendering:
 1. use if else to set a variable that will contain an elenent components
 2. ternary operator condition ? 'for true' : "flase"
 3. Logical &&: (if the conditioin is true next thing will be displayed)
 4. Logical || (if the condition is false then the next thing will be displyed)
 */

 /**
  * 
  Conditional Style Css class
  1. use ternary
  2. ternary inside template string
 */