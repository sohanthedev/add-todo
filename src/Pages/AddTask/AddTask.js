import React from 'react';
import  { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];

const AddTask = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
      
    };

    const addToDo=(e)=>{
        e.preventDefault()
        const form = e.target;
        const inputValue=form.add.value;
        console.log(inputValue)
    }
  

    return (
        <div className='flex flex-col justify-center items-center my-12 '>
            <FileUploader  handleChange={handleChange} name="file" types={fileTypes} />
            
           <form className='w-full flex justify-center items-center my-4'>
           <input name='add' className='border-[#333] text-center w-1/3 bg-[#e4ddf4] p-3 rounded-lg shadow-md ' placeholder='add todo' type="text" /> 
            <button type='submit' onClick={e => this.addToDo(e)} className='border-none px-2'><i class="fa-solid fa-circle-plus text-orange-400 text-4xl"></i> </button>
           </form>
        </div>
    );
};

export default AddTask;