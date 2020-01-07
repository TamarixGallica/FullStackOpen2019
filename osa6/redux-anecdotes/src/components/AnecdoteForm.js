import React from 'react';
import { connect } from 'react-redux'
import { createAnecdote, asObject } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

    const add = async (event) => {
        event.preventDefault()
        props.createAnecdote(asObject(event.target.anecdote.value))
        event.target.anecdote.value = ''
      }
    
    
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div><input name="anecdote" /></div>
                <button>create</button>
            </form>
        </>
    )
}

const mapDispatchToProps = {
    createAnecdote
}

const connectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default connectedAnecdoteForm
