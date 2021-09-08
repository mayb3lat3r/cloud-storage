import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducers/userReducer'

import './navbar.scss'

const Navbar = () => {
    const isAuthorized = useSelector(state => state.user.isAuth)
    const username = useSelector(state => state.user.email)
    const dispatch = useDispatch()
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
                        {username}
                    </div>
                    <div>
                        <Button onClick={() => dispatch(logout())}>Выйти</Button>
                    </div>
                </div> : <div className="navbar__user-no-auth">
                    <Link to="/login"><Button className="auth-btn">Войти</Button></Link>
                    <Link to="/register"><Button className="auth-btn">Регистрация</Button></Link>
                </div>}
            </div>

        </div>
    )
}

export default Navbar