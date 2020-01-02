import React from 'react'

const getStyles = (type) => {
    let style = {}
    if (type === 'error') {
        style = Object.assign(style, {backgroundColor: 'pink'})
    }
    if (type === 'success') {
        style = Object.assign(style, {backgroundColor: 'lightgreen'})
    }
    style = Object.assign(style, {border: '1px solid black'})
    return style
}

const ToastMessage = ({ type, message}) => {
    return <div style={ getStyles(type) }>{message}</div>
}

export default ToastMessage
