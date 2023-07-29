

export const AddNewToDo = () => {

    const handleOnClick = (event) =>{
        console.log(event)
    }

  return (
    <button onClick={handleOnClick}>
        Add New Tasks
    </button>
  )
}
