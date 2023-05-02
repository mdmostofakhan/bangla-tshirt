import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, haFriend, ring}) => {
    return (
        <div>
            <h3>Cousin</h3>
            <p><small>{children}</small></p>
           {haFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;