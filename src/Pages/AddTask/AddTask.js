import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useContext } from 'react';
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { storage } from '../../Firebase/firebase.config';


const fileTypes = ["JPG", "PNG", "GIF"];
const AddTask = () => {
    const { user } = useContext(AuthContext)
    const [urls, setUrls] = useState('')


    const handleChange = (file) => {
        const imageRef = ref(storage, `images/${file.name}`);
        uploadBytes(imageRef, file).then(res => getDownloadURL(res.ref).then(url => setUrls(url)))
        console.log(user)
    };

    console.log(urls)
    const addToDo = (e) => {

        e.preventDefault()




        const form = e.target;
        const inputValue = form.add.value;
        const toDOInput = {
            todo: inputValue,
            email: user?.email,
            img: urls


        }
        console.log(toDOInput)
        fetch('https://todo-list-server.onrender.com/addtodo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toDOInput)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('To Do added successfully')
                    form.reset()
                }
            })

    }


    return (
        <div className='flex flex-col justify-center items-center my-12 '>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

            <form onSubmit={addToDo} className='w-full flex justify-center items-center my-4'>
                <input name='add' className='border-[#333] text-center w-1/3 bg-[#e4ddf4] p-3 rounded-lg shadow-md ' placeholder='add todo' type="text" />
                <button type='submit' className='border-none px-2'><i class="fa-solid fa-circle-plus text-[#0c92bf] text-4xl"></i> </button>
            </form>
        </div>
    );
};

export default AddTask;