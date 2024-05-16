import {Routes,Route} from 'react-router-dom'
import {Home} from '../Pages/Home'
import {Profile} from '../Pages/Profile'
import {Shop} from '../Pages/Shop'
import {Cart} from '../Pages/Cart'
import {Login} from '../Pages/Login'

export function MyRoutes() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Profile' element={<Profile/>} />
      <Route path='/Shop' element={<Shop/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Login' element={<Login/>} />
    </Routes>
    
  )
}
