import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h3>Friends</h3>
        {ring && <p><small>ring: Diamond</small></p>}
        </div>
    );
};

export default Friend;