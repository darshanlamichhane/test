import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Mainbar from "./components/mainbar/Mainbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Interest from "./pages/interests/Interest";
import './styles.scss'
import { Navigate } from 'react-router-dom';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
//import Interest from "./pages/interests/Interest";

function App() {

  const currentUser=true;

  const Layout=()=>{
    return(
      <div>
        <Mainbar/>
        <div style={{display:'flex'}}>
          <Leftbar/>
          <div style={{flex:6}}><Outlet/></div>
          <Rightbar/>
        </div>
      </div>
    );
  }

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to ='/login'/>
    }
    return children
  }

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <ProtectedRoute>
        <Layout/>
        </ProtectedRoute>, 
      children:[
        {
      path:"/interest",
      element:<Interest/>,
    },
        {
        path:'/',
        element: <Home/>,
        },
        {
        path:"/profile/:id",
        element: <Profile/>,
        },
  ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    // <div> className='theme-dark'></div>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
