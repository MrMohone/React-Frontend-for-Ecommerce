import NavBar from '../assets/components/ui/NavBar'
import Footer from '../assets/components/ui/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout