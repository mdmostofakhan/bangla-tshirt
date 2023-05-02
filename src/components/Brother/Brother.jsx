import React, { useContext } from 'react';
import { MoneyContext, RingContact } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContact)
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h3>Brother</h3>
            <p>Ring:{ring}</p>
            <p>grandpa money: {money}</p>
        </div>
    );
};

export default Brother;