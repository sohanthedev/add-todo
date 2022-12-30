import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import './Header.css'


const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(err => console.log(err))
    }

    return (
        <div>
            <nav className='for-desktop'>

                <li className='logo'><Link  to="/"><img className='img' src="https://lh6.ggpht.com/aiY9J8YK8Lzr7hMC7nZWlZGiBn8TF_PY7NVNy5U1i5g4zG8yEPzEZTJK2WwbWJUogg" alt="" /></Link></li>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/addTask">Add task</Link></li>
                <li><Link className='link' to="addmytask">My task</Link></li>
                <li><Link className='link' to="/completed">Completed task</Link></li>
                {user?.uid ?
                <li><button onClick={handleLogOut} className='link' to="/">Sign Out</button></li>:
                <li><Link className='link' to="/login">Login</Link></li>}
            </nav>

            <nav className='for-mobile'>
                <li className='logo'><Link to="/"><img className='img' src="https://lh6.ggpht.com/aiY9J8YK8Lzr7hMC7nZWlZGiBn8TF_PY7NVNy5U1i5g4zG8yEPzEZTJK2WwbWJUogg" alt="" /></Link></li>
                <li className='dropdown'><i class="fa-solid fa-bars text-2xl"></i>
                    <ul className='lists'>
                        <li><Link className='link' to="/">Home</Link></li>
                        <li><Link className='link' to="/addTask">Add task</Link></li>
                        <li><Link className='link' to="addmytask">My task</Link></li>
                        <li><Link className='link' to="/completed">Completed task</Link></li>
                        {user?.uid ?
                            <li><button onClick={handleLogOut} className='link' to="/">Sign Out</button></li> :
                            <li><Link className='link' to="/login">Login</Link></li>}
                    </ul>
                </li>
            </nav>

        </div>
    );
};

export default Header;