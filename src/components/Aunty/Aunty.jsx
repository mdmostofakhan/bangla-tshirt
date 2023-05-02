import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h3>aunty</h3>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin haFriend={true} ring={ring}>Nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;