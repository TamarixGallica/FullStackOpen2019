import React from 'react'

const StatusMessage = ({message, messageType}) => {

    let messageStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if(message==='') {
        return null
    }

    if( messageType === 'error') {
        messageStyle.color = 'red';
    }

    return (
        <div style={messageStyle}>{message}</div>
    )
}

export default StatusMessage