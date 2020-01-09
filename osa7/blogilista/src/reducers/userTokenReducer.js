const setUserToken = (user) => {
  return {
    type: 'set_usertoken',
    data: user
  }
}

const resetUserToken = () => {
  return {
    type: 'reset_usertoken'
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
  case 'set_usertoken':
    return action.data
  case 'reset_usertoken':
    return null
  default:
    return state
  }
}

export { setUserToken, resetUserToken }
export default reducer