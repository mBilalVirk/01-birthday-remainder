import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './data'
import List from './List'
import './App.css'

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthday Today</h3>
        <List people={people}/>
        <button onClick={()=> setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App
