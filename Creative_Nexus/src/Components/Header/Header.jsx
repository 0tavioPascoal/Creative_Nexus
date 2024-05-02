//imports
import { NavLink, } from 'react-router-dom';

//css
import styles from './styles.module.css'

//png, logos and svg
import logo from '../../assets/CN.png'

const Header = () => {
    return(
        <div className={styles.navbar}>
          <div className={styles.navContainer}>
            <NavLink className={styles.logoImage} to='/'>
              <img src={logo} alt='logo' width={'80rem'} />
            </NavLink>
            </div>
  
            <ul className={styles.navLinks}>
              <li>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/3dModels'>3D Models</NavLink>
                <NavLink to='/Designs'>Designs</NavLink>
                <NavLink to='/Plugins'>Plugins</NavLink>
                <NavLink to='/Builds'>Builds</NavLink>
                <NavLink to='/contact'>Contato</NavLink>
              </li>
            </ul>
          </div>
  
    )
}

export default Header