import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  
  const hook = () => {
    personService.getall()
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

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

    personService.create(personObject)
      .then((response) => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
      })
  }

  const removeName = (event) => {
    event.preventDefault();

    const id = event.target.attributes['data-person-id'].value

    const confirmed = window.confirm(`Delete ${persons.filter(person => person.id.toString() === id)[0].name}?`)

    if(confirmed) {
      personService.remove(id)
      .then(() => {
        const newPersons = persons.filter(person => person.id.toString() !== id)
        setPersons(newPersons)
      })
    }
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

  const handlePersonRemove = (event) => {
    removeName(event)
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
        personRemoveHandler={handlePersonRemove}
      />
    </div>
  )

}

export default App