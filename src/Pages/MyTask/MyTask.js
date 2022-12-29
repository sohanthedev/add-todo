import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyTask = () => {
const {user} = useContext(AuthContext)
    const [getToDo ,setGetToDo]=useState([]);
    const [id,setId]=useState('')
    useEffect(()=>{
        fetch(`http://localhost:5000/addmytask?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setGetToDo(data))
    },[user?.email])

    const handleComplete = (id) => {
        fetch(`http://localhost:5000/complete/${id}`, {
          method: 'PUT',
        
        })
        .then(res=>res.json())
        .then(data=>{
            fetch(`http://localhost:5000/addmytask?email=${user?.email}`)
            .then(res=>res.json())
            .then(data=>setGetToDo(data))
        })
    
     
       
      
    
      }
    const handleDelete=()=>{
 
        
          fetch(`http://localhost:5000/addmytask/${id}`,{
            method:'DELETE'
            
          })
          .then(res=>res.json())
          .then(data=>{
          fetch(`http://localhost:5000/addmytask?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setGetToDo(data))
        alert("deleted")
        })
          
        
        console.log(id)
    }
    console.log(id)
    return (

        <div className='w-5/6 mx-auto my-12'>
       {getToDo.map(todo=>{
       
       return  !todo.completed &&  <div className='my-4 text-2xl font-semibold bg-slate-100 block p-5 rounded shadow-md relative'>
        <div className='w-[90%]  flex gap-10'>
        <img className='w-52 rounded' src={todo.img} alt="" />
        <p className='text-justify'>{todo.todo}  </p> 
        </div>
        <i onClick={()=>handleComplete(todo._id)} class="cursor-pointer fa-regular fa-square-check absolute right-28 top-7 mr-4"></i>
         <div className='cursor-pointer' onClick={handleDelete}>
         <i  onClick={()=>setId(todo._id)} class="fa-solid fa-trash-can text-right absolute right-10 top-7"></i>
         </div>
         
        <i  class="fa-solid fa-pen-to-square absolute right-20 top-7"></i>
        </div>
       })}
        </div>
    );
};

export default MyTask;
