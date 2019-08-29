import React from 'react'
import { useMyHook } from '@laney/use-truncate-list'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App