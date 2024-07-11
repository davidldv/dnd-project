import { useState } from 'react'
import {closestCenter, DndContext} from '@dnd-kit/core'

function App() {
  const [people, setPeople] = useState([
    { name: 'John', age: 25, id: 1 },
    { name: 'Jane', age: 24, id: 2 },
    { name: 'Doe', age: 26, id: 3 },
  ])

  const handleDragEnd = () => {

  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <h1>Users List</h1>

      
    </DndContext>
  )
}
``
export default App
