import React from 'react'

const Notification = ({ store }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const notification = store.getState().notification
  if (notification) {
    return (
      <div style={style}>
        {store.getState().notification}
      </div>
    )
  }
  return (<></>)
}

export default Notification