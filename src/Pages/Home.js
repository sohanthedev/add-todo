import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Welcome to your ", "ToDo List App", "Add Som Todo's"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 200,
        loop: 1
      });
      return () => {
        typed.destroy();
      };
    }, []);
    return (
        <div >
            <div className='to-do shadow-lg'>
            <p className='style-to-do' ref={el}></p>

            </div>
            <div className='btn-add-task'>
            <button className='main-btn shadow-md'><Link className='add-task' to='/addTask'>Add Task</Link></button>
            </div>
            <div className='flex justify-center '>
          <img className='imgBanner min-w-full' src="https://d12y7sg0iam4lc.cloudfront.net/s/img/marketing/top-todo-app/to-do-list.png" alt="" />
            </div>

        </div>
    );
};

export default Home;