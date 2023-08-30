import { Link } from "react-router-dom"
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav >
        <ul className={styles.nav}>
          <li ><Link to='/' className={styles.li}>Home</Link></li>
          <li ><Link to='/contacto' className={styles.li}>Contacto</Link></li>
          <li ><Link to='/beer/'className={styles.li}>Beer</Link></li>
        </ul>   
    </nav>

  )
}

export default Navbar