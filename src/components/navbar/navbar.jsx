import './Navbar.css'

const Navbar = () => {
  return (
   <div className='navbar'>
    <div className='navlogo'>EV-olution</div>
    <ul className='navmenu'>
      <li>Home</li>
      <li>Explore</li>
      <li>About</li>
      <li className='con'>contact</li>
      <li className='navcontact'>Contact</li>

    </ul>

   </div>
  )
}

export default Navbar
