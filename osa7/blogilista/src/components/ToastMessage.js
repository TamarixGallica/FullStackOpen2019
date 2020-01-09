import React from 'react'
import { connect } from 'react-redux'

const getStyles = (type) => {
  let style = {}
  if (type === 'error') {
    style = Object.assign(style, { backgroundColor: 'pink' })
  }
  if (type === 'success') {
    style = Object.assign(style, { backgroundColor: 'lightgreen' })
  }
  style = Object.assign(style, { border: '1px solid black' })
  return style
}

const ToastMessage = (props) => {
  return <div className="toastmessage" style={ getStyles(props.type) }>{props.message}</div>
}

const mapStateToProps = (state) => {
  return {
    type: state.statusMessage.type,
    message: state.statusMessage.message
  }
}

const connectedToastMessage = connect(mapStateToProps)(ToastMessage)
export default connectedToastMessage
