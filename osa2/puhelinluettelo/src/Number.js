import React from 'react'

const Number = ({person, filter}) => {
    if(person.name.toUpperCase().includes(filter.toUpperCase()))
      return (
        <p>{person.name} {person.number}</p>
      )
    return ( <></> )
  }

export default Number;