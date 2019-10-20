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

const HighestVotedAnecdote = (votes) => {
  const MostVotes = Math.max.apply(null, votes);
  return votes.indexOf(MostVotes);
}

const Vote = (votes, index) => {
  const copy = [...votes];
  copy[index] += 1;
  return copy;
}

const Anecdote = ({anecdote, votes}) => {

  return (
    <p>
      {anecdote}<br/>
      has {votes} votes
    </p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, voteSelected] = useState([0,0,0,0,0,0]);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} votes={votes[selected]} />
      <Button clickEvent={() => voteSelected(Vote(votes, selected))} label="vote" />
      <Button clickEvent={() => setSelected(RandomNumber(anecdotes))} label="next anecdote" />
      <h1>Anecdote with the most votes</h1>
      <Anecdote anecdote={props.anecdotes[HighestVotedAnecdote(votes)]} votes={Math.max.apply(null, votes)} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)