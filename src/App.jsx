import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './Components/Pages/Login/LoginPage'
import OrderPage from './Components/Pages/Order/OrderPage'
import ErrorPage from './Components/Pages/Order/ErrorPage'

function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/order/:username' element={<OrderPage />}/>
          <Route path='*' element={<ErrorPage />}/> 
        </Routes>

        
      </div>

  )
}

export default App
