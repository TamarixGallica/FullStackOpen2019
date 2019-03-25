import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({message}) => <h1>{message}</h1>
const Stat = ({label, count}) => <p>{label} {count}</p>
const Average = ({label, average}) => <p>{label} {average} %</p>

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
        <button onClick={handleGoodClick}>hyvä</button>
        <button onClick={handleNeutralClick}>neutraali</button>
        <button onClick={handleBadClick}>huono</button>
        <Header message={"statistiikka"} />
        <Stat label="hyvä" count={good} />
        <Stat label="neutraali" count={neutral} />
        <Stat label="huono" count={bad} />
        <Stat label="yhteensä" count={good + neutral + bad} />
        <Stat label="keskiarvo" count={(good - bad) / (good + neutral + bad)} />
        <Average label="positiivisia" average={good / (good + neutral + bad) * 100} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)