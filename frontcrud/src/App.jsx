
import './App.css'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import {Toaster} from 'react-hot-toast'


axios.defaults.baseURL='http://localhost:3000/'

function App() {
 

  return (
    <>
    <NavBar/>
    <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
     
    </>
  )
}

export default App
