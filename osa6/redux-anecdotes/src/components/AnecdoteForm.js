import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {

    const add = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        store.dispatch(createAnecdote(anecdote))
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

export default AnecdoteForm
