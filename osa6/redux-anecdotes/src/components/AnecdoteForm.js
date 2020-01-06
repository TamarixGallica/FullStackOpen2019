import React from 'react';
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

    const add = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        props.createAnecdote(anecdote)
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
