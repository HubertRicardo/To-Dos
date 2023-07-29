

export const ToDoItem = (props) => {
  return (
    <li>
      <span
      onClick={props.onComplete}>
        v
      </span>
      <p>
        {props.text}
      </p>
      <span onClick={props.onDelete}>
        X
      </span>
    </li>
  )
}
