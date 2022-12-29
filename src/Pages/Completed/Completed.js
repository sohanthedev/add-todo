import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Completed = () => {
    const {user} = useContext(AuthContext)
    const [getToDo ,setGetToDo]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/addmytask?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setGetToDo(data))
    },[user?.email])

    return (
        <div className='w-5/6 mx-auto my-12'>
        {getToDo.map(todo=>{
        
        return  todo.completed &&  <div className='my-4 text-2xl font-semibold bg-slate-100 block p-5 rounded shadow-md relative'>
         <div className='w-[90%]  flex gap-10'>
         <img className='w-52 rounded' src={todo.img} alt="" />
         <p className='text-justify'>{todo.todo}  </p> 
         </div>
       
         </div>
        })}
         </div>
    );
};

export default Completed;