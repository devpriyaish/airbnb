import photoGrid from '../assets/photo-grid.png'
import './Header.css'

/**
 * Render the header component.
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  return (
    <header>
      {/* Render the hero image */}
      <img className='hero-image' src={photoGrid} alt="Photo grid containing 9 different art images" />
      <div className='header-info'>
        {/* Render the header title */}
        <h1>Online Experiences</h1>
        {/* Render the header description */}
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </header>
  )
}

export default Header