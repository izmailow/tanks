import React from 'react'
import logo from '../../media/logo.svg'
import { Link } from 'react-router-dom'
import './style.css';

export class Header extends React.Component {
    render () {
        return (
            <div className="Page-header-wrap">
                <div className="Page-header">
                    <img src={logo} className="Page-logo" alt="logo" />
                    <h2>WEB sockets</h2>
                    <div> USERNAME</div>
                    <div>rating</div>
                    <Link to="/">logout</Link>
                </div>
            </div>
        )
    }
}