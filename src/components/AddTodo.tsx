import React, { useState } from 'react'
import "../style/style.css"

interface FormProps {
  addTodo: any
}

const AddTodo = ({addTodo}: FormProps) => {

  const [title, setTitle] = useState<string>('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
     const { value } = e.target;
     setTitle(value);
  }

  const Submit = (e:React.FormEvent<HTMLFormElement>):void => {
      e.preventDefault();
      console.log(title)
      addTodo(title);
      setTitle('');  
  }
    
  return (
    <div className='flex justify-center items-center my-16 '>
       <div className='w-[392px] h-[100px] bg-red-300 rounded'>
       <form className='flex justify-center mt-8 gap-3' onSubmit={Submit}>
        <input type="text" className='outline-none rounded p-2' onChange={handleChange} value={title} required />
        <button type='submit' className='trasnparent border-2 rounded p-2 pointer text-white hover:text-gray-200 hover:bg-slate-500'>Add Todo</button>
       </form>
       </div>
    </div>
  )
}

export default AddTodo