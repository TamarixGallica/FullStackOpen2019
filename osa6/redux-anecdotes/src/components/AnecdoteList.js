import React from 'react';
import _ from 'lodash'

const AnecdoteList = ({ store }) => {

    const anecdotes = _.orderBy(store.getState().anecdotes, ['votes'], ['desc'])

    const vote = (id) => {
        store.dispatch({
            type: 'vote',
            data: {
                id
            }
        })
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
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList
