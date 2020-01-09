const initialStatus = {
  type: '',
  message: ''
}

const createStatusMessage = (type, message) => {
  return {
    type: 'set_statusmessage',
    data: {
      type,
      message
    }
  }
}

const reducer = ( state = initialStatus, action) => {
  switch (action.type) {
  case 'set_statusmessage':
    return {
      type: action.data.type,
      message: action.data.message,
    }
  default:
    return state
  }
}

export { createStatusMessage }
export default reducer
