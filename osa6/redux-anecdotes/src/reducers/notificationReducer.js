const resetNotification = () => {
    return {
        type: 'reset_notification'
    }
}

const reducer = (state = '', action) => {

    switch(action.type) {
        case 'vote':
            return action.data.anecdote.content
        case 'set_notification':
            return action.data.message
        case 'reset_notification':
            return ''
        default:
            return state
    }
}

export { resetNotification }
export default reducer
