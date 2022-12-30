import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyTask = () => {
  const { user } = useContext(AuthContext)
  const [getToDo, setGetToDo] = useState([]);
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState('')
  const [value, setValue] = useState('')
  console.log(value);
  useEffect(() => {
    fetch(`https://todo-list-server.onrender.com/addmytask?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setGetToDo(data))
  }, [user?.email])

  const handleComplete = (id) => {
    fetch(`https://todo-list-server.onrender.com/complete/${id}`, {
      method: 'PUT',

    })
      .then(res => res.json())
      .then(data => {
        fetch(`https://todo-list-server.onrender.com/addmytask?email=${user?.email}`)
          .then(res => res.json())
          .then(data => setGetToDo(data))
      })

  }
  const handleDelete = () => {

    fetch(`https://todo-list-server.onrender.com/addmytask/${id}`, {
      method: 'DELETE'

    })
      .then(res => res.json())
      .then(data => {
        fetch(`https://todo-list-server.onrender.com/addmytask?email=${user?.email}`)
          .then(res => res.json())
          .then(data => setGetToDo(data))
        alert("deleted")
      })

  }


  const handleEdit = () => {
    setEdit(true);
  }

  const handleUpdate = (todoId) => {
    const textInput = {
      todo: value
    }

    fetch(`https://todo-list-server.onrender.com/updated/${todoId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(textInput)
    })
      .then(res => res.json())
      .then(data => {
        fetch(`https://todo-list-server.onrender.com/addmytask?email=${user?.email}`)
          .then(res => res.json())
          .then(data => setGetToDo(data))
        alert("Todo Updated!")
      })
    console.log(todoId, textInput)
  }


  return (

    <div className='lg:w-5/6 mx-2 lg:mx-auto my-12'>
      {getToDo.map(todo => {

        return !todo.completed && <div className='my-4 lg:text-lg text-sm font-thin lg:font-semibold bg-slate-100 block p-5 rounded shadow-md relative'>
          <div className='w-[90%] flex gap-10'>
            <img className='w-9 lg:w-20 rounded' src={todo.img} alt="" />
            <textarea id={todo._id} onChange={() => setValue(document.getElementById(todo._id).value)} onFocus={handleEdit} className='border p-3 w-full bg-slate-100 outline-none' type="text" defaultValue={todo.todo} />
            {
              edit &&
              <button onClick={() => handleUpdate(todo._id)} className='h-7 absolute right-0 bottom-2 lg:static px-4 mx-3 text-sm text-white rounded bg-[#0c92bf]'>Update</button>
            }
          </div>
          <i onClick={() => handleComplete(todo._id)} class="cursor-pointer fa-regular fa-square-check absolute lg:right-14 right-5 text-2xl top-7 mr-4"></i>
          <div className='cursor-pointer' onClick={handleDelete}>
            <i onClick={() => setId(todo._id)} class="fa-solid text-2xl fa-trash-can text-right absolute right-2 lg:right-10 top-7"></i>
          </div>
        </div>
      })}
    </div>
  );
};

export default MyTask;
