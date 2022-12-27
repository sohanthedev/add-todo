import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Welcome to your ", "to do List"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 200,
        backSpeed: 100,
        backDelay: 100
      });
      return () => {
        typed.destroy();
      };
    }, []);
    return (
        <div >
            <div className='to-do'>
            <p className='style-to-do' ref={el}></p>

            </div>
            <div className='btn-add-task'>
            <button className='main-btn'><Link className='add-task' to='/addTask'>Add Task</Link></button>
            </div>
            <div>
            <img className='imgBanner' src="https://d12y7sg0iam4lc.cloudfront.net/s/img/marketing/top-todo-app/to-do-list.png" alt="" />
            </div>
            
        </div>
    );
};

export default Home;