import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({clickEvent, label}) => {
    return (
        <button onClick={clickEvent}>{label}</button>
    )
}

const RandomNumber = ({length}) => {
    return Math.floor(Math.random() * length)
}

const HighestVotedAnecdote = (anecdotes) => {
  const votes = anecdotes.map(x => x.votes);
  const HighestVoted = Math.max.apply(null, votes);
  return anecdotes[HighestVoted];
}

const Anecdote = ({anecdote}) => {

  return (
    <p>
      {anecdote.anecdote}<br/>
      has {anecdote.votes} votes
    </p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const voteSelected = useState(0)[1];

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} />
      <Button clickEvent={() => voteSelected(props.anecdotes[selected].votes += 1)} label="vote" />
      <Button clickEvent={() => setSelected(RandomNumber(anecdotes))} label="next anecdote" />
      <h1>Anecdote with the most votes</h1>
      <Anecdote anecdote={HighestVotedAnecdote(props.anecdotes)} />
    </div>
  )
}

const anecdotes = [
  {
    anecdote: 'If it hurts, do it more often',
    votes: 0
  },
  {
    anecdote: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    anecdote: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)