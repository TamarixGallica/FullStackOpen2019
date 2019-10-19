import React from 'react'

const Total = (props) => {
    let sum = 0;
    props.parts.map(parts => sum+=parts.exercises);
    return (
        <p>yhteensä {sum} tehtävää</p>
    )
}

export default Total