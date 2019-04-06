import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({message}) => <h1>{message}</h1>
const Statistic = ({label, count}) => <p>{label} {count}</p>
const Average = ({label, average}) => <p>{label} {average} %</p>
const Button = ({clickEvent, label}) => {
  return (
    <>
    <button onClick={clickEvent}>{label}</button>
    </>
  )
}
const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0)
  {
    return (
      <>
      Ei yhtään palautetta annettu
      </>
    )
  }
  
  return (
    <>
    <Statistic label="hyvä" count={good} />
    <Statistic label="neutraali" count={neutral} />
    <Statistic label="huono" count={bad} />
    <Statistic label="yhteensä" count={good + neutral + bad} />
    <Statistic label="keskiarvo" count={(good - bad) / (good + neutral + bad)} />
    <Average label="positiivisia" average={good / (good + neutral + bad) * 100} />
    </>
  )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)
    
    return (
    <div>
        <Header message={"anna palautetta"} />
        <Button clickEvent={handleGoodClick} label="hyvä" />
        <Button clickEvent={handleNeutralClick} label="neutraali" />
        <Button clickEvent={handleBadClick} label="huono" />
        <Header message={"statistiikka"} />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)