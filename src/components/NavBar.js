import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <nav className='navbar'>
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/About'>About</NavLink>
            <NavLink className='link' to='/Workouts'>Workouts</NavLink>
        </nav>
    )
}

export default NavBar