import React from 'react'
import TodoItems from './TodoItems';
import type { StateProps } from "./TodoApp";

interface ListProps {
    todos: StateProps[]
    onDelete: (id: number) => void
    markComplete: (id: number, completed: boolean) => void
}

const TodoList = ({todos, onDelete, markComplete}:ListProps) => {


    const todo = todos.map((todo) => <TodoItems { ...todo } key={todo.id} onDelete={onDelete} markComplete={markComplete} />  )
      return (
      <ul className='flex flex-col gap-2 justify-center items-center'>{todo}</ul>
      )
}

export default TodoList