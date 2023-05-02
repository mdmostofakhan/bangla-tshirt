import React, { useContext } from 'react';
import { RingContact } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContact)
    return (
        <div>
            <h3>special</h3>
            <p><small>Ring:{angti}</small></p>
        </div>
    );
};

export default Special;