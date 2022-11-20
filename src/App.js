import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Statics from './Components/Statics/Statics';
import Blog from './Components/Blog/Blog';
import DefoultHome from './Components/DefoultHome/DefoultHome';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<DefoultHome></DefoultHome>
      },
        {
          path: '/home',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path: '/statics',
          element:<Statics></Statics>
        },
        {
          path: '/blogs',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
