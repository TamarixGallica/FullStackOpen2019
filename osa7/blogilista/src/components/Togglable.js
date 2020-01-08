import React, { useState } from 'react'

const Togglable = ({ buttonlabel, children }) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => toggleVisibility()}>{buttonlabel}</button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button onClick={() => toggleVisibility()}>Cancel</button>
      </div>
    </div>
  )
}

export default Togglable
