import React from 'react'
import Number from './Number'

const Persons = ({ persons, newFilter, personRemoveHandler }) => 
  <>
    {
      persons.map(person => <Number key={person.name} person={person} filter={newFilter} personRemoveHandler={personRemoveHandler} />)
    }
  </>

export default Persons