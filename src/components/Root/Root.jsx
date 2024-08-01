
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'


export default function Root() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        
    </div>
  )
}
