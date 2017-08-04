import React from 'react'
import logo from '../media/logo.svg';
import { Header } from './header'
import './style.css';

export class Page extends React.Component {
    render () {
        return (
            <div className="Page">
                <Header />
                    <p className="Page-intro">
                        To get started, edit <code>src/Page.js</code> and save to reload.
                    </p>
            </div>
        );
    }
}
