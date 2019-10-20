import React, { useState } from 'react'

const Number = ({person, filter}) => {
  if(person.name.toUpperCase().includes(filter.toUpperCase()))
    return (
      <p>{person.name} {person.number}</p>
    )
  return ( <></> )
}

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
      <form>
        <div>
          filter shown with <input onChange={handleFilterChange} value={newFilter} />
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <Number key={person.name} person={person} filter={newFilter} />)
      }
    </div>
  )

}

export default App