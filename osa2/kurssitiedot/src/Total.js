import React from 'react'

const Total = (props) => {
    const sum = props.parts.reduce((s, p) => {
        return s+p.exercises
    }, 0);
    return (
        <p>yhteensä {sum} tehtävää</p>
    )
}

export default Total