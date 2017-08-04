import React from 'react'
import logo from '../media/logo.svg';
import './styles.css';

export class Page extends React.Component {
    render () {
        return (
            <div className="Page">
                <div className="Page-header-wrap">
                    <div className="Page-header">
                        <img src={logo} className="Page-logo" alt="logo" />
                        <h2>Логотип мне нравится</h2>
                    </div>
                </div>
                    <p className="Page-intro">
                        To get started, edit <code>src/Page.js</code> and save to reload.
                    </p>
            </div>
        );
    }
}
