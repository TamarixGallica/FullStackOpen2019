import React from 'react'

const PersonForm = ({ addNameHandler, handleNameChangeHandler, name, handleNumberChangeHandler, number }) => {
  return (
    <form onSubmit={addNameHandler}>
      <div>
          name: <input onChange={handleNameChangeHandler} value={name} />
      </div>
      <div>
          number: <input onChange={handleNumberChangeHandler} value={number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm