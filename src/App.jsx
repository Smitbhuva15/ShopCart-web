
import { Outlet } from 'react-router-dom'
import './App.css'
import Navitems from './component/Navitems'
import Footer from './component/Footer'

function App() {
  

  return (
    <>
    <Navitems />
   <div className='min-vh-100'>
      <Outlet />
   </div>
     <Footer />
    </>
  )
}

export default App
