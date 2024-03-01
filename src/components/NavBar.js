import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <nav className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Workouts'>Workouts</NavLink>
        </nav>
    )
}

export default NavBar