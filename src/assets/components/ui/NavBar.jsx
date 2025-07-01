import {FaCartShopping} from 'react-icons/fa6';
import {Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import NavBarLink from './NavBarLink'

const NavBar = () => {
  return (
   <nav className={`navbar navbar-expand-lg navbar-light bg-white shadew-sm py-3 ${styles.stickyNavbar}`}>
    <div className='container'>
        <Link className='navbar-brand fw-bold text-uppercase' to='/'> SHOPPIT </Link>
        <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collaps'
            data-bs-target='#navbarContent'
            aria-controls='navbarContent'
            aria-label='Toggle navigaion'>
                <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarContent'>
        <NavBarLink/>
            <Link to='/cart' className={`btn btn-dark ms-3 rounded-pill position-relative ${styles.responsiveCart}`}>
               <FaCartShopping/>
               <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill'
                style={{fontSize: '0.85rem', padding:'0.5em 0.65em', backgroundeColor:'#6050DC'}}>
                    12
               </span>
            </Link>
        </div>
    </div>
   </nav>
  )
}

export default NavBar