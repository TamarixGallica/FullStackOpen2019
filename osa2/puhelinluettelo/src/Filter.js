import React from 'react'

const Filter = ({ changeHandler, value }) => {
  return (
    <form>
      <div>
        filter shown with <input onChange={changeHandler} value={value} />
      </div>
    </form>
  )
}

export default Filter