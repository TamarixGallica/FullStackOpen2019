const reducer = (state = 'default message', action) => {

    switch(action.type) {
        case 'set_notification':
            return action.data.message
        default:
            return state
    }
}

export default reducer
