import React from 'react'
import Number from './Number';

const Persons = ({persons, newFilter}) => 
    <>
        {
            persons.map(person => <Number key={person.name} person={person} filter={newFilter} />)
        }
    </>

export default Persons