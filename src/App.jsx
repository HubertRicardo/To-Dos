import React from 'react'
import { ToDoItem } from './components/ToDoItem'
import { ToDoCounter } from './components/ToDoCounter'
import { ToDoSearch } from './components/ToDoSearch'
import { AddNewToDo } from './components/AddNewToDo'
import { useState } from 'react'


  const defaultToDos = [
    {text: 'Despertar', completed: true},
    {text: 'Levantar', completed: false},
    {text: 'Lavarse la cara', completed: false}
  ]


export const App = () => {
  
  
    const [searchValue, setSearchValue] = useState('')
    console.log(`se escribio: ${searchValue}`)

  const [toDos, seToDos] = useState(defaultToDos)
  const completedToDos = toDos.filter(
    toDos => !!toDos.completed
  ).length;
  const totalToDos = toDos.length;
  

  const searchedToDos = toDos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
     }
  )
  

  return (
    <>
    
    <ToDoCounter total={totalToDos} completed={completedToDos}/>
    <ToDoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />

    { 
      searchedToDos.map(
        todos => (
          <ToDoItem key={todos.text} text={todos.text}/>
        )
      )
    }

    <AddNewToDo/>
    </>
  )
}