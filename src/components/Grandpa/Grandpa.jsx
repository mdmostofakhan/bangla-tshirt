import React from 'react';
import Father from '../Father/Father';
import Uncal from '../Uncal/Uncal';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

const Grandpa = () => {
    const ring = 'daimon'
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncal></Uncal>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;
