import { useState } from "react"


export const ToDoSearch = ({searchValue, setSearchValue}) => {

    const onChange = (event) =>{
        setSearchValue(event.target.value)
    }


  return (
    <div>
        <input 
        type="text" 
        placeholder="new tasks"
        onChange={onChange}
        value={searchValue}
        />
    </div>
    
  )
}
