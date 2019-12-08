import React from 'react'

const Number = ({ person, filter, personRemoveHandler }) => {
  if(person.name.toUpperCase().includes(filter.toUpperCase()))
    return (
      <p>
        {person.name} {person.number}
        <input type="button" value='delete' onClick={personRemoveHandler} data-person-id={person.id}/>
      </p>
    )
  return ( <></> )
}

export default Number