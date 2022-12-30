
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './LayOut/Main';
import AddTask from './Pages/AddTask/AddTask';
import Completed from './Pages/Completed/Completed';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import MyTask from './Pages/MyTask/MyTask';
import SignUp from './Pages/SignUp/SignUp';
import PrivateRout from './PrivetRout/PrivateRout';

function App() {

  const router= createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/addTask',
          element:<PrivateRout><AddTask></AddTask></PrivateRout>
        },
        {
          path:'/addmytask',
          element:<PrivateRout><MyTask></MyTask></PrivateRout>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/completed',
          element: <PrivateRout><Completed></Completed></PrivateRout>
        }
      ]
    }
  ])
  return (
    <div>
     <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
