import React from 'react'
import logo from '../../media/logo.svg';
import './style.css';

export class Header extends React.Component {
    render () {
        return (
            <div className="Page-header-wrap">
                <div className="Page-header">
                    <img src={logo} className="Page-logo" alt="logo" />
                    <h2>Логотип мне нравится</h2>
                    <span> USERNAME</span>
                    <span>rating</span>
                    <button>logout</button>
                </div>
            </div>
        )
    }
}