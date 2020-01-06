import React from 'react';
import _ from 'lodash'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {

    const anecdotes = _.orderBy(store.getState().anecdotes, ['votes'], ['desc'])

    const vote = (anecdote) => {
        store.dispatch(voteAnecdote(anecdote))
        setTimeout(() => store.dispatch(resetNotification()), 5000)
    }


    return (
        <>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList
