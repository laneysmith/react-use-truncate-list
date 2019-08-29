import React, { useState } from 'react'
import { useTruncateList } from '@laney/react-use-truncate-list'

const cheeses = [
  'Blue',
  'Brie',
  'Cheddar',
  'Chhurpi',
  'Goat',
  'Gouda',
  'Gruyère',
  'Havarti',
  'Parmesan',
  'Provolone',
  'Raclette',
  'Roquefort',
  'Sharp Cheddar',
  'Swiss'
]

const App = () => {
  const [ initialCheeseCount, setInitialCheeseCount ] = useState(5)
  const onUpdateCheeseCount = e => setInitialCheeseCount(e.target.value)
  const {
    displayed,
    remaining,
    displayAllAction,
    truncateAction
  } = useTruncateList(cheeses.length, initialCheeseCount)

  return (
    <div className='container'>
      <h3>Cheeses!</h3>
      <label htmlFor='cheese-count'>Initial:</label>
      <input id='cheese-count' type='number' min='0' value={initialCheeseCount} onChange={onUpdateCheeseCount} />
      <ul>
        {cheeses.slice(0, displayed).map(cheese => (
          <li key={cheese}>{cheese}</li>
        ))}
      </ul>
      {remaining
        ? <button onClick={displayAllAction}>Show {remaining} More Cheeses</button>
        : <button onClick={truncateAction}>Show Fewer Cheeses</button>}
    </div>
  )
}
export default App
