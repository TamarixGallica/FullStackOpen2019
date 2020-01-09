const setUser = (user) => {
  return {
    type: 'set_user',
    data: user
  }
}

const resetUser = () => {
  return {
    type: 'reset_user'
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
  case 'set_user':
    return action.data
  case 'reset_user':
    return null
  default:
    return state
  }
}

export { setUser, resetUser }
export default reducer