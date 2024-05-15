import {Routes,Route} from 'react-router-dom'
import {Home} from '../Pages/Home'
import {Login} from '../Pages/Login'

export function MyRoutes() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
    </Routes>
    
  )
}
