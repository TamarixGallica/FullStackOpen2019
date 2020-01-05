import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const count = () =>
    store.getState().good + store.getState().ok + store.getState().bad

  const average = () => {
    if (count() === 0) {
      return 0
    }

    return (store.getState().good - store.getState().bad) / count()
  }

  const positivePercentage = () => {
    if (count() === 0) {
      return 0
    }

    return store.getState().good / count() * 100
  }

  return (
    <div>
      <button onClick={good}>hyvä</button> 
      <button onClick={ok}>neutraali</button> 
      <button onClick={bad}>huono</button>
      <button onClick={zero}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
      <div>yhteensä {count()}</div>
      <div>keskiarvo {average()}</div>
      <div>positiivisia {positivePercentage()} %</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
