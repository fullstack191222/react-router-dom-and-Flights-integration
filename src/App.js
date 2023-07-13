import logo from './logo.svg';
import './App.css';
import Flights from './components/Flights/Flights';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>, children: [
      {
        path: "/",
        element: <div><Home/></div>,
      },
      {
        path: "/items",
        element: <div><h1>Items!</h1></div>
      },
      {
        path: "/flights",
        element: <div><Flights/></div>,
      },
    ],
  },
  
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
