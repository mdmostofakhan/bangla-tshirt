import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h3>aunty</h3>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin>Rubel</Cousin>
            </section>
        </div>
    );
};

export default Aunty;