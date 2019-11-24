import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  
  const addName = (event) => {
    event.preventDefault();

    if(persons.findIndex((person => person.name === newName))!==-1)
    {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const personObject = {
      "name": newName,
      "number": newNumber
    }

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter changeHandler={handleFilterChange} value={newFilter} />
      <h2>add a new</h2>
      <PersonForm
        addNameHandler={addName}
        handleNameChangeHandler={handleNameChange}
        name={newName}
        handleNumberChangeHandler={handleNumberChange}
        number={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        newFilter={newFilter}
      />
    </div>
  )

}

export default App