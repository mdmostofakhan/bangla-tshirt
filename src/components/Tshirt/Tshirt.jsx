import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h4>price: {price}</h4>
            <button onClick={handleAddToCart}>By Know</button>
        </div>
    );
};

export default Tshirt;