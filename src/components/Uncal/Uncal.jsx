import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncal = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>uncal</h3>
            <p><small>grandpa money: {money}</small></p>
            <button onClick={() => setMoney (money + 1000)}>Send 1000tk</button>
           <section className='flex'>
           <Cousin>Nabila</Cousin>
            <Cousin>Nabilas</Cousin>
           </section>
        </div>
    );
};

export default Uncal;