import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import SignUp from './pages/signup/signUp'
import { Navigate, Route, Routes, } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from'./context/authContext'
function App() {
  const {authUser} = useAuthContext()
  return (
    <div className='h-screen flex p-4 justify-center items-center'>
      <Routes>
        <Route path='/' element={authUser?<Home/> : <Navigate to={'/login'}/>}/>
        <Route path='/login' element={authUser? <Navigate to='/'/> : <Login/>}/>
        <Route path='/signup' element={authUser? <Navigate to='/'/> : <SignUp/> }/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
