import React, { useEffect, useState } from 'react'
import AddTodo  from "./AddTodo";
import TodoList from './TodoList';
import axios from 'axios';

type StateProps = {
  userId: number
  id: number
  title: string
  completed: boolean
}


const TodoApp = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [todos, setTodos] = useState<StateProps[]>([
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },]);

  const onDelete = (id: number) => {
      console.log(id);
      const newArray = [...todos];
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const data = newArray.filter((todo) => todo.id !== id )
        setTodos(data)
      })
      .catch((err) => {
        console.log(err)
      })
      //   const data = newArray.filter((todo) => todo.id !== id )
      //  setTodos(data) 
   }

   const markComplete = (id: number, completed:boolean) => {
    console.log(id);
    console.log(completed)
    const newArray = [...todos];
    axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: !completed})
    .then((res) => {
      const data = newArray.map((todo) => {
        if(todo.id === id) {
            todo.completed = !completed;
        }
        return todo;
      })

      setTodos(data);
    })
    .catch((e) => {
      console.log(e)
    })

    // const newArray = [...todos];
    //   const data = newArray.map((todo) => {
    //     if(todo.id === id) {
    //         todo.completed = !completed;
    //     }
    //     return todo;
    //   })

    //   setTodos(data);
   }

   const addTodo = (title: string):void => {
     console.log(title);
     const user = {
      // userId: 1,
      // id: Math.floor(Math.random()),
      title,
      completed: false
     }

     const newArray = [...todos];
     axios.post("https://jsonplaceholder.typicode.com/todos", user)
     .then((res) => {
      console.log(res)
        newArray.push(res.data);
        setTodos(newArray)
     })
     .catch((err) => {
      console.log(err)
     })
    //  newArray.push(user);
    //  setTodos(newArray)
   }

   useEffect(() => {
    setLoading(true);
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => { 
        console.log(res)
         setTodos(res.data)
         setLoading(false) 
        })
      .catch((e) => { 
        console.log(e)
        setLoading(false)
      })
   },[])

  return (
    <div>
      <AddTodo addTodo={addTodo} />
     { loading ? "Loading...." : <TodoList todos={todos} onDelete={onDelete} markComplete={markComplete} /> }
    </div>
  )
}

export type { StateProps };
export default TodoApp