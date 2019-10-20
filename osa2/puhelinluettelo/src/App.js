import React, { useState } from 'react'

const Number = ({person}) => {
  return (
    <p>{person.name}</p>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  
  const addName = (event) => {
    event.preventDefault();

    if(persons.findIndex((person => person.name === newName))!==-1)
    {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const personObject = {
      "name": newName
    }

    setPersons(persons.concat(personObject));
    setNewName('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Number key={person.name} person={person} /> )}
    </div>
  )

}

export default App