import React, { useState, useEffect } from 'react'
import StatusMessage from './StatusMessage'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState('')
  
  const hook = () => {
    personService.getall()
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const addOrUpdateName = (event) => {
    event.preventDefault();

    const personIndex = persons.findIndex((person => person.name === newName))

    if(personIndex !== -1)
    {
      if(window.confirm(`${persons[personIndex].name} is already added to phonebook, replace the old number with a new one?`)) {
        replaceNumber(persons[personIndex].id, personIndex)
      }
    }
    else {
      AddName();
    }

  }
  
  const showMessage = (message, timeout) => {
    setMessage(message)
    setTimeout(() => {
      setMessage('')
    }, timeout);
  };

  const AddName = () => {

    const personObject = {
      "name": newName,
      "number": newNumber
    }

    personService.create(personObject)
      .then((response) => {
        setPersons(persons.concat(response.data));
        showMessage(`Added ${newName}`, 3000)
        setNewName('');
        setNewNumber('');
      })
  }

  const replaceNumber = (id, index) => {
    console.log(`Would replace a number with id ${id}`)
    const personObject = {
      "name": newName,
      "number": newNumber
    }

    personService.update(id, personObject)
      .then(() => {
        showMessage(`Updated ${newName}`, 3000)
        setNewName('')
        setNewNumber('')
        hook();
      })
  }

  const removeName = (event) => {
    event.preventDefault();

    const id = event.target.attributes['data-person-id'].value

    const confirmed = window.confirm(`Delete ${persons.filter(person => person.id.toString() === id)[0].name}?`)

    if(confirmed) {
      const removedPerson = persons.filter(person => person.id.toString() === id)[0]
      personService.remove(id)
      .then(() => {
        showMessage(`Deleted ${removedPerson.name}`, 3000)
        hook()
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
      <StatusMessage message={message} />
      <Filter changeHandler={handleFilterChange} value={newFilter} />
      <h2>add a new</h2>
      <PersonForm
        addNameHandler={addOrUpdateName}
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