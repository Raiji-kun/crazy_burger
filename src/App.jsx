import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './Components/Pages/Login/LoginPage'
import OrderPage from './Components/Pages/Order/OrderPage'

function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/order/:id' element={<OrderPage />}/>
          {/* <Route path='/*' element={< />}/> */}
        </Routes>

        
      </div>

  )
}

export default App
