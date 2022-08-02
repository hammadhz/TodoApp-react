import React from 'react'
import type { StateProps } from './TodoApp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type ItemProps = {
  onDelete: (id:number) => void
  markComplete: (id:number, completed:boolean) => void
}

type MergeProps = ItemProps & StateProps

const TodoItems = ({id, userId, title, completed, onDelete, markComplete}: MergeProps) => {


  return (
    <li className='rounded p-3 w-[392px] bg-red-300 flex justify-between text-white items-center  hover:text-gray-200 hover:bg-slate-500' key={id}>
      <p> <input type="checkbox" checked={completed} onChange={() => markComplete(id, completed)} name="" id="" /> 
      <span style={{textDecoration: completed ? 'line-through': 'none'}}>{title}</span> 
      </p>  
      <span onClick={() => onDelete(id)}>
      <FontAwesomeIcon icon={faXmark} />
      </span>
      </li>
  )
}

export default TodoItems