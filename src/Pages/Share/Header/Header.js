import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav>

                <li className='logo'><Link  to="/"><img className='img' src="https://lh6.ggpht.com/aiY9J8YK8Lzr7hMC7nZWlZGiBn8TF_PY7NVNy5U1i5g4zG8yEPzEZTJK2WwbWJUogg" alt="" /></Link></li>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/addTask">Add task</Link></li>
                <li><Link className='link' to="">My task</Link></li>
                <li><Link className='link' to="">Completed task</Link></li>
            </nav>
            
        </div>
    );
};

export default Header;