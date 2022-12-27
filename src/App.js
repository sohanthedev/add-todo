
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './LayOut/Main';
import AddTask from './Pages/AddTask/AddTask';
import Home from './Pages/Home';

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
          element:<AddTask></AddTask>
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
