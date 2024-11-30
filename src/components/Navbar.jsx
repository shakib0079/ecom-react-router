
import logo from '../assets/react.svg';
import styles from './styles/Navbar.module.css'
import { NavLink } from 'react-router';

function Navbar() {
  
  return (
    <div className={styles.navbar}>
        <div className={styles.navLogo}>
            <img className={styles.navLogoImg} src={logo} alt="" />
            <p>ecom</p>
        </div>  
      <ul className={styles.navMenus}>
        <NavLink to='/'><li className={styles.navLi}>Home</li></NavLink>
        <NavLink to='/products'><li className={styles.navLi}>Products</li></NavLink>
        <NavLink to='/contact'><li className={styles.navLi}>Contact</li></NavLink>
        <NavLink to='/about'><li className={styles.navLi}>About</li></NavLink>
      </ul>
      <button className={styles.btn}>Get Started</button>
      
    </div>
  )
}

export default Navbar
