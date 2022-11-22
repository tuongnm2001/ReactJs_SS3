import './Nav.scss'
import { NavLink, Route } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/weather">Weather App</NavLink>
            <NavLink to="/otp">OTP App</NavLink>
        </div>
    )
}

export default Nav;