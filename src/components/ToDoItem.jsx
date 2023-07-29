import { useState } from "react"


export const ToDoItem = () => {
  const [newTasks, setNewTasks] = useState(['cortar cebolla'])
  return (
    <ul>
      {
        newTasks.map(item => (
          <li key={item}>{item}</li>
        ))
      }
    </ul>
  )
}
