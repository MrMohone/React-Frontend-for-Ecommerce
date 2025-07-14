import NavBar from '../assets/components/ui/NavBar'
import Footer from '../assets/components/ui/Footer'
import { ToastContainer} from 'react-toastify'
import { Outlet } from 'react-router-dom'

const MainLayout = ({numCartItems}) => {
  return (
    <>
    <NavBar numCartItems={numCartItems}/>
    <ToastContainer />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout