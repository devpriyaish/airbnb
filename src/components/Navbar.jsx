import airBnbLogo from '../assets/airbnb-logo.png'
import './Navbar.css'

/**
 * Render the navigation bar component.
 * 
 * @returns {JSX.Element} The rendered navigation bar.
 */
const Navbar = () => {
  return (
    // Render the navigation bar with the AirBnb logo
    <nav className="navbar">
      <img src={airBnbLogo} alt="AirBnb logo" />
    </nav>
  )
}

export default Navbar