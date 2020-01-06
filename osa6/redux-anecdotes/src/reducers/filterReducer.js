const setFilter = (filter) => {
    return {
        type: 'filter',
        data: {
            filter
        }
    }
}

const reducer = (state = '', action) => {
    console.log(action)
    switch (action.type) {
        case 'filter':
            return action.data.filter
        default:
            return state
    }
}

export { setFilter }
export default reducer