import { useState } from 'react';
import logo from '../assets/react.svg';
import styles from './styles/Navbar.module.css'
import { NavLink, useNavigate } from 'react-router';

function Navbar() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate()

  const loaderHandler = () => {
    setLoader(true);

    setTimeout(() => {
      navigate("/products")
      setLoader(false);
    }, 2000);
  }

  return (
    <div className={styles.navbar}>
        <div className={styles.navLogo}>
            <img className={styles.navLogoImg} src={logo} alt="" />
            <p>ecom</p>
        </div>  
        {loader && <div className={styles.loader}>Loading.....</div>}
      <ul className={styles.navMenus}>
        <NavLink to='/'><li className={styles.navLi}>Home</li></NavLink>
        <NavLink to='/products'><li className={styles.navLi} onClick={loaderHandler}>Products</li></NavLink>
        <NavLink to='/contact'><li className={styles.navLi}>Contact</li></NavLink>
        <NavLink to='/about'><li className={styles.navLi}>About</li></NavLink>
      </ul>
      <button className={styles.btn}>Get Started</button>
      
    </div>
  )
}

export default Navbar
