import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Button } from 'antd'
import './navbar.scss'

const Navbar = () => {
    const isAuthorized = false
    return (
        <div className="navbar">
            <Link to="/">
                <div className="navbar__info">
                    <div className="navbar__logo"><img src={logo} alt="Cloud" /></div>
                    <div className="navbar__name">CloudStorage</div>
                </div>
            </Link>

            <div className="navbar__user">
                {isAuthorized ? <div className="navbar__user-auth">
                    <div className="navbar__avatar">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                    </div>
                    <div className="navbar__username">
                        Maybelater
                    </div>
                </div> : <div className="navbar__user-no-auth">
                    <Link to="/login"><Button className="auth-btn">Log in</Button></Link>
                    <Link to="/register"><Button className="auth-btn">Register</Button></Link>
                </div>}
            </div>

        </div>
    )
}

export default Navbar