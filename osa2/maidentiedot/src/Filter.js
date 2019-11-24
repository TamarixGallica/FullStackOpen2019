import React from 'react';

const Filter = ({filter, valueChangeHandler}) => {
    return (
        <div>
            find countries
            <input type="text" value={filter} onChange={valueChangeHandler} />
        </div>
    )
}

export default Filter