import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncal from '../Uncal/Uncal';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const RingContact = createContext('gold');
export const MoneyContext = createContext(0);
const Grandpa = () => {
    const ring = 'daimon'
   const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContact.Provider value='golden ring'>
                  <section className='flex'>
                    <Father ring={ring}></Father>
                    <Uncal></Uncal>
                    <Aunty ring={ring}></Aunty>
                  </section>
                </RingContact.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * 1. creat context and export
 * 2. creat a provider and pass a value
 */