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
  const [message, setMessage] = useState({
    message: '',
    messageType: ''
  })
  
  const hook = () => {
    personService.getall()
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const addOrUpdateName = (event) => {
    event.preventDefault()

    const personIndex = persons.findIndex((person => person.name === newName))

    if(personIndex !== -1)
    {
      if(window.confirm(`${persons[personIndex].name} is already added to phonebook, replace the old number with a new one?`)) {
        replaceNumber(persons[personIndex].id, personIndex)
      }
    }
    else {
      AddName()
    }

  }
  
  const showMessage = (message, messageType, timeout) => {
    setMessage({
      message: message,
      messageType: messageType
    })
    setTimeout(() => {
      setMessage({
        message: '',
        messageType: ''
      })
    }, timeout)
  }

  const AddName = () => {

    const personObject = {
      'name': newName,
      'number': newNumber
    }

    personService.create(personObject)
      .then((response) => {
        setPersons(persons.concat(response.data))
        showMessage(`Added ${newName}`, 'ok', 3000)
        setNewName('')
        setNewNumber('')
      })
      .catch((error) => {
        showMessage(error.response.data.error, 'error', 3000)
      })
  }

  const replaceNumber = (id) => {
    const personObject = {
      'name': newName,
      'number': newNumber
    }

    personService.update(id, personObject)
      .then(() => {
        showMessage(`Updated ${newName}`, 'ok', 3000)
      })
      .catch(() => {
        showMessage(`Information of ${newName} has already been removed from server`, 'error', 3000)
      })
      .finally(() => {
        setNewName('')
        setNewNumber('')
        hook()
      })
  }

  const removeName = (event) => {
    event.preventDefault()

    const id = event.target.attributes['data-person-id'].value

    const confirmed = window.confirm(`Delete ${persons.filter(person => person.id.toString() === id)[0].name}?`)

    if(confirmed) {
      const removedPerson = persons.filter(person => person.id.toString() === id)[0]
      personService.remove(id)
        .then(() => {
          showMessage(`Deleted ${removedPerson.name}`, 'ok', 3000)
          hook()
        })
        .catch(() => {
          showMessage(`Information of ${removedPerson.name} has already been removed from server`, 'error', 3000)
          hook()
        })
    }
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handlePersonRemove = (event) => {
    removeName(event)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <StatusMessage message={message.message} messageType={message.messageType} />
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