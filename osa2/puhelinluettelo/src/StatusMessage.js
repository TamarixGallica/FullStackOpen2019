import React from 'react'

const messageStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
}

const StatusMessage = ({message}) => {
    if(message==='') {
        return null
    }
    return (
        <div style={messageStyle}>{message}</div>
    )
}

export default StatusMessage