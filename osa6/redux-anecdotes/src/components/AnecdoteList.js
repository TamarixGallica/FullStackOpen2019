import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

    const anecdotes = _.orderBy(props.anecdotes, ['votes'], ['desc'])
        .filter(x => x.content.includes(props.filter))

    const vote = (anecdote) => {
        props.voteAnecdote(anecdote)
        setTimeout(() => props.resetNotification(), 5000)
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    resetNotification
}

const connectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default connectedAnecdoteList
