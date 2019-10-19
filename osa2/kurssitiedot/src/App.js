import React from 'react'
import Course from './Course'

const App = () => {
    const course = {
      name: 'Half Stack -sovelluskehitys',
      parts: [
        {
            name: 'Reactin perusteet',
            exercises: 10
        },
        {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
        },
        {
          name: 'Komponenttien tila',
          exercises: 14
        }
      ]
    }
  
    return (
      <div>
          <Course course={course} />
      </div>
    )
  }

export default App